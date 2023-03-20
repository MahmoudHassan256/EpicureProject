"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishesDal = void 0;
const dishes_1 = __importDefault(require("../db/models/dishes"));
class DishesDal {
    async createDish(dishes) {
        dishes = new dishes_1.default({
            name: dishes.name,
            price: dishes.price,
            url: dishes.url,
            ingredients: dishes.ingredients,
            type: dishes.type,
            types: dishes.types ? dishes.types : [],
        });
        const response = await dishes_1.default.create(dishes);
        return response;
    }
    async updateDish(dishes) {
        await dishes_1.default.findOne({
            name: dishes.name,
        }).updateOne({ $set: { chef: dishes.chef, } });
        const updatedDishes = await dishes_1.default.find();
        return updatedDishes;
    }
    findAll() {
        return dishes_1.default.find();
    }
}
exports.DishesDal = DishesDal;
