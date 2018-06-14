import { Sequelize, Model } from 'sequelize';


export default class Meal extends Model {
  static modelFields = {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false
    }
  };

  static init(sequelize) {
    return super.init(Meal.modelFields, { sequelize });
  }

  static associate(models) {
    const { Restaurant } = models;

    Meal.belongsTo(Restaurant, {
      foreignKey: 'restaurantId',
    });
  }
}
