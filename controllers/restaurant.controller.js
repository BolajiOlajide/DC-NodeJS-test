import Restaurant from '../models/restaurant.model';
import Meal from '../models/meal.model';
import Review from '../models/review.model';

const RestaurantCtrl = {
  async createRestaurant(req, res) {
    // console.log(req.body);
    let data;
    try {
      console.log(Restaurant.create(req.body));
      data = await Restaurant.create(req.body);
    } catch (error) {
      return res.status(400).json({ status: 'error', message: error.message });
    }
    return res.status(201).json({ status: 'success', data });
  },
  async getAllRestaurants(req, res) {
    try {
      const data = await Restaurant.findAll({
        // attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [{ model: Meal }, { model: Review }]
      });
      return res.status(200).json({ status: 'success', data });
    } catch (error) {
      return res.status(400).json({ status: 'error', message: error.message });
    }
  },
  async getSingleRestaurant(req, res) {
    const { restaurantId } = req.params;
    let data;
    try {
      data = await Restaurant.findOne({
        where: { id: restaurantId },
        include: [{ model: Meal }, { model: Review }]
      });
    } catch (error) {
      return res.status(400).json({ status: 'error', message: error.message });
    }
    return res.status(200).json({ status: 'success', data });
  },
  async deleteRestaurant(req, res) {
    const { restaurantId } = req.params;
    try {
      const restaurant = await Restaurant.findOne({ where: { id: restaurantId }});
      if (!restaurant) {
        return res.status(400).json({ status: 'error', message: 'Restaurant doesn\'t exist' });
      };
      await restaurant.destroy();
      return res.status(200).json({ status: 'success', message: 'Restaurant successfully deleted' });
    } catch (error) {
      return res.status(400).json({ status: 'error', message: error.message });
    }
  }
};

export default RestaurantCtrl;
