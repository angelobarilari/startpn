const { Sequelize, Model } = require('sequelize')

class Users extends Model {
  static init (sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
      },
      {
        sequelize,
        modelName: 'User',
        tableName: 'users',
      }
    )
  }

  static associate(models) {
    this.hasMany(models.Schedule, {
      foreignKey: 'ownerId',
      as: 'ownedSchedules'
    });

    this.hasMany(models.Schedule, {
      foreignKey: 'guestId',
      as: 'guestSchedules'
    });
  }
}

module.exports = Users
