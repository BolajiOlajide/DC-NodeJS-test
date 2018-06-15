import { Sequelize, Model } from 'sequelize';


export default class Restaurant extends Model {
  static modelFields = {
    logo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    commercialName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    legalName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5
      },
    },
    commercialEmail: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    adminNumber: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    location: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Date.now()
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Date.now()
    }
  };

  static init(sequelize) {
    return super.init(Restaurant.modelFields, { sequelize });
  }

  static associate(models) {
    const { Meal, Review } = models;

    Restaurant.hasMany(Meal, {
      foreignKey: 'restaurantId'
    });

    Restaurant.hasMany(Review, {
      foreignKey: 'restaurantId'
    });
  }
}
