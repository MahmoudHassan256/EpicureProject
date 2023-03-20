import { DishesDal } from "../dal/dishes.dal";


export class DishesService {
    public static async getDishes() 
    {
        const dal=new DishesDal();
        const res = await dal.findAll();
        return res;
    };

    public static async createDish(dish:any) 
    {
        const dal=new DishesDal();
        const res=dal.createDish(dish);
        return res;
    };
    public static async updateDish(dish:any)
    {
        const dal=new DishesDal();
        const res=await dal.updateDish(dish);
        return res;
    };
};