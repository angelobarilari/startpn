'use strict';

const Users = require('../../app/models/Users')
const Schedules = require('../../app/models/Schedules')
const Config = require('../../config/database')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const sequelizeInstance = new Sequelize(Config)

    Users.init(sequelizeInstance)
    Schedules.init(sequelizeInstance)

    const usersAttributes = Users.getAttributes()
    const schedulesAtributes = Schedules.getAttributes()
    
    await queryInterface.createTable(Users.tableName, usersAttributes)
    await queryInterface.createTable(Schedules.tableName, schedulesAtributes)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('schedules');
  }
};
