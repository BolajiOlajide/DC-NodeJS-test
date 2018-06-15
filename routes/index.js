// import { ReviewCtrl, RestaurantCtrl, MealCtrl } from '../controllers';
import Ctrl from '../controllers';
// console.log(ReviewCtrl, 'ReviewCtrl')

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Restaurant API!',
  }));

  // restaurant
  app.post('/api/restaurants', Ctrl.RestaurantCtrl.createRestaurant);
  app.get('/api/restaurants', Ctrl.RestaurantCtrl.getAllRestaurants);
  app.get('/api/restaurants/:restaurantId', Ctrl.RestaurantCtrl.getSingleRestaurant);
  // app.patch('/api/restaurants/:restaurantId', Ctrl.RestaurantCtrl.updateRestaurant);
  app.delete(
    '/api/restaurants/:restaurantId', Ctrl.RestaurantCtrl.deleteRestaurant
  );

  // For any other request method
  app.all('/api', (req, res) =>
    res.status(405).send({ message: 'Method Not Allowed' }));
};