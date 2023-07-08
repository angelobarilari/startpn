const { Sequelize } = require('sequelize');
const databaseConnection = require('../config/database');
const Users = require('../app/models/Users');
const Schedules = require('../app/models/Schedules')

const models = [Users, Schedules]

class Database {
    constructor () {
        this.init()
    }

    init() {
        this.connection = new Sequelize(databaseConnection);
        
        models.forEach(model => model.init(this.connection))

        Users.associate({ Schedule: Schedules });
        Schedules.associate({ User: Users });
    }
}

module.exports = new Database();
