import Users from "../db/models/users";
import bcrypt from "bcrypt";

export class UsersDal {
  public async createUser(userData: any) {
    const existingUser = await Users.findOne({ email: userData.email });
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user = new Users({
      firstname: userData.firstname,
      lastname: userData.lastname,
      email: userData.email,
      phonenumber: userData.phonenumber,
      password: hashedPassword,
    });

    return await user.save();
  }
  public async getUser(email: string, password: string) {
    const user = await Users.findOne({ email });
    if (!user) return null;

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return null;

    return user;
  }
}
