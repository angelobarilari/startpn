const { Router } = require('express')
const authMiddleware = require('./app/middlewares/auth')

const ControllerUsers = require('./app/controllers/ControllerUsers')
const ControllerSessions = require('./app/controllers/ControllerSession')
const ControllerSchedules = require('./app/controllers/ControllerSchedules')

const routes = Router()

/** SESSIONs **/
routes.post('/sessions', ControllerSessions.login)

/** USERS **/
routes.post('/users', ControllerUsers.createUser)
routes.get('/users/:id', authMiddleware, ControllerUsers.getUserById)
routes.get('/users/email', ControllerUsers.getUserByEmail)
routes.patch('/users/:id', authMiddleware, ControllerUsers.updateUser)
routes.delete('/users/:id', authMiddleware, ControllerUsers.deleteUser)

/** SCHEDULES **/ 
routes.post('/schedules', authMiddleware, ControllerSchedules.createSchedule)
routes.get('/schedules', authMiddleware, ControllerSchedules.getSchedulesByUserId)
routes.patch('/schedules/:id', authMiddleware, ControllerSchedules.updateSchedule)
routes.delete('/schedules/:id', authMiddleware, ControllerSchedules.deleteSchedule)

module.exports = routes

