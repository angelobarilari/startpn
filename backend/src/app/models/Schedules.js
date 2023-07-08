const { Sequelize, Model } = require('sequelize')
const User = require('./Users')

class Schedules extends Model {
    static init (sequelize) {
        super.init({
            id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            ownerId: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                model: User,
                key: 'id',
              },
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
            guestId: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                model: User,
                key: 'id',
              },
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
            scheduleName: {
              type: Sequelize.STRING,
              allowNull: false
            },
            scheduleDate: {
              type: Sequelize.DATE,
              allowNull: false
            },
            talkingPoints: {
              type: Sequelize.JSON,
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
            modelName: "Schedule",
            tableName: "schedules",
        })
    }

    static associate(models) {
        // Definir a relação Many:1 com User como owner
        this.belongsTo(models.User, {
          foreignKey: 'ownerId',
          as: 'owner'
        });
    
        // Definir a relação Many:1 com User como guest
        this.belongsTo(models.User, {
          foreignKey: 'guestId',
          as: 'guest'
        });
      }
}

module.exports = Schedules
