
import { Request, Response } from "express";
import { UsersService } from "../services/users.service";

export class UsersController {

    public static async getUser(req: Request, res: Response) {
        const params =req.body;
        const service = new UsersService();
        const Users = await service.getUser(params);
        return res.send(Users);
    };

    public static async createUser(req: Request, res: Response) {
        const params = req.body;
        const service = new UsersService();
        const User = await service.createUser(params);
        return res.send(User);
    };


};

