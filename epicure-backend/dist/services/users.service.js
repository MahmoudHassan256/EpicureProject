"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const users_dal_1 = require("../dal/users.dal");
class UsersService {
    async getUser(User) {
        const dal = new users_dal_1.UsersDal();
        const res = await dal.getUser(User);
        return res;
    }
    ;
    async createUser(User) {
        const dal = new users_dal_1.UsersDal();
        const res = dal.createUser(User);
        return res;
    }
    ;
}
exports.UsersService = UsersService;
;
