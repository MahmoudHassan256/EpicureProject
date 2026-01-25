import { RestaurantsDal } from "../dal/restaurants.dal";

export class RestaurantsService {
  public async getRestaurants() {
    const dal = new RestaurantsDal();
    const res = await dal.getRestaurants();
    return res;
  }

  public async createRestaurant(restaurant: any) {
    const dal = new RestaurantsDal();
    const res = dal.createRestaurant(restaurant);
    return res;
  }

  public async updateRestaurant(restaurant: any) {
    const dal = new RestaurantsDal();
    const res = await dal.updateRestaurant(restaurant);
    return res;
  }
  public async getRestaurant(param: any) {
    const dal = new RestaurantsDal();
    const res = await dal.getRestaurant(param);
    return res;
  }
  public async deleteRestaurant(restaurant: any) {
    const dal = new RestaurantsDal();
    const res = await dal.deleteRestaurant(restaurant);
    return res;
  }
}
