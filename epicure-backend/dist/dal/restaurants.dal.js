"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantsDal = void 0;
const restaurants_1 = __importDefault(require("../db/models/restaurants"));
class RestaurantsDal {
    async createRestaurant(restaurant) {
        restaurant = new restaurants_1.default({
            name: restaurant.name,
            chef: restaurant.chef,
            stars: restaurant.stars,
            url: restaurant.url,
            new: restaurant.new ? restaurant.new : true,
            popular: restaurant.popular ? restaurant.popular : false,
            open: restaurant.open ? restaurant.open : false,
            dishescontainer: restaurant.dishescontainer ? restaurant.dishescontainer : [],
            priceRange: restaurant.priceRange ? restaurant.priceRange : { min: 0, max: 1 },
        });
        const response = await restaurants_1.default.create(restaurant);
        return response;
    }
    async updateRestaurant(restaurant) {
        await restaurants_1.default.findOne({
            name: restaurant.name,
        }).updateOne({ $set: { chef: restaurant.chef, } });
        const updatedRestaurants = await restaurants_1.default.find();
        return updatedRestaurants;
    }
    getRestaurants() {
        return restaurants_1.default.aggregate([
            { $lookup: {
                    from: "dishes",
                    localField: "dishescontainer",
                    foreignField: "_id",
                    as: "dishescontainer"
                } }
        ]);
    }
}
exports.RestaurantsDal = RestaurantsDal;
