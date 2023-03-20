import { Request, Response } from "express";
import { DishesService } from "../services/dishes.service";

export class DishesController {

    public static async getDishes(req: Request, res: Response) {
        const Dishes = await DishesService.getDishes();
        return res.send(Dishes);
    };

    public static async createDish(req: Request, res: Response) {
        const params = req.body;
        const service = new DishesService();
        const dish = await DishesService.createDish(params);
        return res.send(dish);
    };

    public static async updateDish(req: Request, res: Response) {
        const params = req.body;
        const service = new DishesService();
        const dish = await DishesService.updateDish(params);
        return res.send(dish);
    };
};

