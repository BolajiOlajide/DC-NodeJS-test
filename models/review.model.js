import { Sequelize, Model } from 'sequelize';


export default class Review extends Model {
  static modelFields = {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    review: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    rating: {
      type: Sequelize.NUMBER,
      allowNull: false
    }
  };

  static init(sequelize) {
    return super.init(Review.modelFields, { sequelize });
  }

  static associate(models) {
    const { Restaurant } = models;

    Review.belongsTo(Restaurant, {
      foreignKey: 'restaurantId',
    });
  }
}
