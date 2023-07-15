const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    port: process.env.POSTGRES_PORT,

    pool: {
        max: 5,
        min: 0,
        idle: 100000
    }
}

