"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishesController = void 0;
const dishes_service_1 = require("../services/dishes.service");
class DishesController {
    static async getDishes(req, res) {
        const Dishes = await dishes_service_1.DishesService.getDishes();
        return res.send(Dishes);
    }
    ;
    static async createDish(req, res) {
        const params = req.body;
        const service = new dishes_service_1.DishesService();
        const dish = await dishes_service_1.DishesService.createDish(params);
        return res.send(dish);
    }
    ;
    static async updateDish(req, res) {
        const params = req.body;
        const service = new dishes_service_1.DishesService();
        const dish = await dishes_service_1.DishesService.updateDish(params);
        return res.send(dish);
    }
    ;
}
exports.DishesController = DishesController;
;
