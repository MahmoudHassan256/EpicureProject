"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChefsService = void 0;
const chefs_dal_1 = require("../dal/chefs.dal");
class ChefsService {
    static async getChefs() {
        const dal = new chefs_dal_1.ChefsDal();
        const res = await dal.getChefs();
        return res;
    }
    ;
    static async getChef(param) {
        const dal = new chefs_dal_1.ChefsDal();
        const res = await dal.getChef(param);
        return res;
    }
    ;
    async createChef(chef) {
        const dal = new chefs_dal_1.ChefsDal();
        const res = dal.createChef(chef);
        return res;
    }
    ;
    async updateChef(chef) {
        const dal = new chefs_dal_1.ChefsDal();
        const res = await dal.updateChef(chef);
        return res;
    }
    ;
}
exports.ChefsService = ChefsService;
;
