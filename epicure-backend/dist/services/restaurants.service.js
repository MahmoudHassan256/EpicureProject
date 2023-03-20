"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantsService = void 0;
const restaurants_dal_1 = require("../dal/restaurants.dal");
class RestaurantsService {
    async getRestaurants() {
        const dal = new restaurants_dal_1.RestaurantsDal();
        const res = await dal.getRestaurants();
        return res;
    }
    ;
    async createRestaurant(restaurant) {
        const dal = new restaurants_dal_1.RestaurantsDal();
        const res = dal.createRestaurant(restaurant);
        return res;
    }
    ;
    async updateRestaurant(restaurant) {
        const dal = new restaurants_dal_1.RestaurantsDal();
        const res = await dal.updateRestaurant(restaurant);
        return res;
    }
    ;
}
exports.RestaurantsService = RestaurantsService;
;
