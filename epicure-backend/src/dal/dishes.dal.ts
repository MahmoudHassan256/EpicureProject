import Dishes from "../db/models/dishes";

export class DishesDal {

    public async createDish(dishes: any) {
        dishes = new Dishes({
          name: dishes.name,
          price:dishes.price,
          url:dishes.url,
          ingredients:dishes.ingredients,
          type:dishes.type,
          types:dishes.types ? dishes.types : [],
        });
        const response=await Dishes.create(dishes)
        return response;
    }

    public async updateDish(dishes:any) {
      await Dishes.findOne({
        name: dishes.name,
      }).updateOne({$set: {chef: dishes.chef,}});
        const updatedDishes = await Dishes.find();
        return updatedDishes;
    }


    public findAll() {
        return Dishes.find();
    }
}


