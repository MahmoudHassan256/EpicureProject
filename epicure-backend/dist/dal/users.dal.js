"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersDal = void 0;
const users_1 = __importDefault(require("../db/models/users"));
class UsersDal {
    async createUser(User) {
        const bcrypt = require('bcrypt');
        const pass = bcrypt.hashSync(User.password, 10);
        User = new users_1.default({
            firstname: User.firstname,
            lastname: User.lastname,
            email: User.email,
            phonenumber: User.phonenumber,
            password: pass,
        });
        const response = await users_1.default.create(User);
        return response;
    }
    async getUser(param) {
        const bcrypt = require('bcrypt');
        const checkUser = await users_1.default.findOne({ email: param.email }).find();
        if (checkUser.length === 0 || !bcrypt.compareSync(param.password, checkUser[0].password))
            return { msg: "This email/password doesn't match our records" };
        else
            return checkUser;
    }
}
exports.UsersDal = UsersDal;
