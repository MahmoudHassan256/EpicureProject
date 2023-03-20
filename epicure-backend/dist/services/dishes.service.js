"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishesService = void 0;
const dishes_dal_1 = require("../dal/dishes.dal");
class DishesService {
    static async getDishes() {
        const dal = new dishes_dal_1.DishesDal();
        const res = await dal.findAll();
        return res;
    }
    ;
    static async createDish(dish) {
        const dal = new dishes_dal_1.DishesDal();
        const res = dal.createDish(dish);
        return res;
    }
    ;
    static async updateDish(dish) {
        const dal = new dishes_dal_1.DishesDal();
        const res = await dal.updateDish(dish);
        return res;
    }
    ;
}
exports.DishesService = DishesService;
;
