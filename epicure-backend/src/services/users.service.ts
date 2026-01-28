import { UsersDal } from "../dal/users.dal";

export class UsersService {
  public async login(email: string, password: string) {
    const dal = new UsersDal();
    const res = await dal.getUser(email, password);
    return res;
  }

  public async signup(userData: any) {
    const dal = new UsersDal();
    const res = dal.createUser(userData);
    return res;
  }
}
