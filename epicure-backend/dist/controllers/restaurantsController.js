"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantsController = void 0;
const restaurants_service_1 = require("../services/restaurants.service");
class RestaurantsController {
    static async getRestaurants(req, res) {
        const service = new restaurants_service_1.RestaurantsService();
        const restaurants = await service.getRestaurants();
        return res.send(restaurants);
    }
    ;
    static async createRestaurant(req, res) {
        const params = req.body;
        const service = new restaurants_service_1.RestaurantsService();
        const restaurant = await service.createRestaurant(params);
        return res.send(restaurant);
    }
    ;
    static async updateRestaurant(req, res) {
        const params = req.body;
        const service = new restaurants_service_1.RestaurantsService();
        const restaurant = await service.updateRestaurant(params);
        return res.send(restaurant);
    }
    ;
}
exports.RestaurantsController = RestaurantsController;
;
