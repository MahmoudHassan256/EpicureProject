import Restaurants from "../db/models/restaurants";

export class RestaurantsDal {

    public async createRestaurant(restaurant: any) {
        restaurant = new Restaurants({
          name: restaurant.name,
          chef: restaurant.chef,
          stars: restaurant.stars,
          url: restaurant.url,
          new: restaurant.new?restaurant.new : true,
          popular:restaurant.popular? restaurant.popular : false,
          open: restaurant.open ? restaurant.open : false,
          dishescontainer:restaurant.dishescontainer ? restaurant.dishescontainer :[],
          priceRange:restaurant.priceRange?restaurant.priceRange:{min:0,max:1},
        });
        const response=await Restaurants.create(restaurant)
        return response;
    }

    public async updateRestaurant(restaurant:any) {
      await Restaurants.findOne({
        name: restaurant.name,
      }).updateOne({$set: {chef: restaurant.chef,}});
        const updatedRestaurants = await Restaurants.find();
        return updatedRestaurants;
    }
    public  getRestaurants():{[key:string]:any}{
      return Restaurants.aggregate([
        {$lookup:{
          from:"dishes",
          localField:"dishescontainer",
          foreignField:"_id",
          as:"dishescontainer"
        }}
      ])
    }

}


