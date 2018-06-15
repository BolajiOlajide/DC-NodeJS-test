import logger from 'winston';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
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
        allowNull: false
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
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
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).catch(error => logger.error(error));
  },

  down(queryInterface) {
    return queryInterface.dropTable('Restaurants')
      .catch(error => logger.error(error));
  }
};
