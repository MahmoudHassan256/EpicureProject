import { Request, Response } from "express";
import { UsersService } from "../services/users.service";
import jwt from "jsonwebtoken";

export class UsersController {
  public static async loginUser(req: Request, res: Response) {
    const { email, password } = req.body;
    const service = new UsersService();

    const user = await service.login(email, password);
    if (!user) {
      return res.status(401).send({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.send({
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
        name: user.firstname + " " + user.lastname,
      },
    });
  }

  public static async signupUser(req: Request, res: Response) {
    const service = new UsersService();
    try {
      await service.signup(req.body);
      return res.status(201).json({
        message: "User created successfully",
      });
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || "Failed to create user",
      });
    }
  }
}
