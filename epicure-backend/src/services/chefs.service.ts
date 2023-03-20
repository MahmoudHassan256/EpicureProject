import { ChefsDal } from "../dal/chefs.dal";


export class ChefsService {

    public static async getChefs() {
         const dal = new ChefsDal();
         const res = await dal.getChefs();
         return res;
    };
    public static async getChef(param:any) {
     const dal = new ChefsDal();
     const res = await dal.getChef(param);
     return res;
};

    public async createChef(chef: any) {
         const dal = new ChefsDal();
         const res = dal.createChef(chef);
         return res;
    };

    public async updateChef(chef: any) {
         const dal = new ChefsDal();
         const res = await dal.updateChef(chef);
         return res;
    };
};
