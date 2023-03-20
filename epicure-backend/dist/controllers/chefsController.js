"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChefsController = void 0;
const chefs_service_1 = require("../services/chefs.service");
class ChefsController {
    static async getChefs(req, res) {
        const chefs = await chefs_service_1.ChefsService.getChefs();
        return res.send(chefs);
    }
    ;
    static async getChef(req, res) {
        const params = req.body;
        const chef = await chefs_service_1.ChefsService.getChef(params);
        return res.send(chef);
    }
    ;
    static async createChef(req, res) {
        const params = req.body;
        const service = new chefs_service_1.ChefsService();
        const chef = await service.createChef(params);
        return res.send(chef);
    }
    ;
    static async updateChef(req, res) {
        const params = req.body;
        const service = new chefs_service_1.ChefsService();
        const chef = await service.updateChef(params);
        return res.send(chef);
    }
    ;
}
exports.ChefsController = ChefsController;
;
