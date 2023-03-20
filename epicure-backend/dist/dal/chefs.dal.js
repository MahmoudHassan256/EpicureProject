"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChefsDal = void 0;
const chefs_1 = __importDefault(require("../db/models/chefs"));
class ChefsDal {
    async createChef(chef) {
        chef = new chefs_1.default({
            name: chef.name,
            url: chef.url,
            award: chef.award ? chef.award : false,
            new: chef.new ? chef.new : true,
            popular: chef.popular ? chef.popular : false,
            Restaurantscontainer: chef.Restaurantscontainer ? chef.Restaurantscontainer : [],
        });
        const response = await chefs_1.default.create(chef);
        return response;
    }
    async updateChef(chef) {
        const data = await chefs_1.default.findOne({
            name: chef.name,
        }).updateOne({ $set: { age: chef.age, }, });
        return data;
    }
    async getChef(param) {
        const response = await chefs_1.default.aggregate([
            { $match: { name: `${param.name}` } },
            { $lookup: {
                    from: "restaurants",
                    localField: "Restaurantscontainer",
                    foreignField: "_id",
                    as: "Restaurantscontainer"
                } }
        ]);
        return response;
    }
    getChefs() {
        return chefs_1.default.aggregate([
            { $lookup: {
                    from: "restaurants",
                    localField: "Restaurantscontainer",
                    foreignField: "_id",
                    as: "Restaurantscontainer"
                } }
        ]);
    }
}
exports.ChefsDal = ChefsDal;
