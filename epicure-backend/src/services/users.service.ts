import { UsersDal } from "../dal/users.dal";

export class UsersService{

    public async getUser(User:any) {
        const dal = new UsersDal();
        const res = await dal.getUser(User);
        return res;

    };

    public async createUser(User:any) {
        const dal = new UsersDal();
        const res = dal.createUser(User);
        return res;
    };
};



