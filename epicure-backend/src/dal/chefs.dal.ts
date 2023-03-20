import { response } from "express";
import Chefs from "../db/models/chefs";

export class ChefsDal {

    public async createChef(chef: any) {
        chef = new Chefs({
          name: chef.name,
          url:chef.url,
          award:chef.award ? chef.award:false,
          new:chef.new ? chef.new : true,
          popular:chef.popular? chef.popular : false,
          Restaurantscontainer:chef.Restaurantscontainer? chef.Restaurantscontainer : [],
        });

        const response=await Chefs.create(chef);
        return response;
    }

    public async updateChef(chef:any) {
      const data = await Chefs.findOne({
        name: chef.name,
      }).updateOne({$set: {age: chef.age,},})
        return data
      }
    public async getChef(param:any){
      const response=await Chefs.aggregate([
        {$match: { name:`${param.name}`}},
        {$lookup:{
          from:"restaurants",
          localField:"Restaurantscontainer",
          foreignField:"_id",
          as:"Restaurantscontainer"
        }}
      ])
      return response;

    }

    public  getChefs():{[key:string]:any}{
      return Chefs.aggregate([
        {$lookup:{
          from:"restaurants",
          localField:"Restaurantscontainer",
          foreignField:"_id",
          as:"Restaurantscontainer"
        }}
      ])
    }
}


