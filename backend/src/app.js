const compression = require('compression')
const express = require('express')
const cors = require('cors')
const routes = require('./routes')
require('./database/index')

class App {
    constructor () {
        this.server = express()
        this.middlewares()
        this.routes()
    }

    middlewares () {
        this.server.use(cors())
        this.server.use(compression())
        this.server.use(express.json({ limit: '500mb' }))
    }

    routes () {
        this.server.use(routes)
    }
}

module.exports = new App().server   
