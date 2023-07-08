require('dotenv').config()
const server = require('./app')
server.listen(process.env.APP_PORT)
