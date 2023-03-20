import { response } from "express";
import Users from "../db/models/users";

export class UsersDal{

    public async createUser(User: any) {
      const bcrypt = require('bcrypt');
      const pass = bcrypt.hashSync(User.password,10)
      User = new Users({
          firstname: User.firstname,
          lastname:User.lastname,
          email:User.email,
          phonenumber:User.phonenumber,
          password:pass,
        });

        const response=await Users.create(User);
        return response;
    }
    public async getUser(param:any){
      const bcrypt = require('bcrypt');
      const checkUser= await Users.findOne({email:param.email}).find();
      if(checkUser.length===0 || !bcrypt.compareSync(param.password,checkUser[0].password))
      return {msg:"This email/password doesn't match our records"}
      else return checkUser;
    }

}


