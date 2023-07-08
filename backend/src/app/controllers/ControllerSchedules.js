const Schedules = require('../models/Schedules')
const Users = require('../models/Users')

class ControllerSchedules {
    async createSchedule(req, res) {
        const { scheduleName, scheduleDate, guestEmail, talkingPoints } = req.body
        const ownerId = req.decodedId

        const guest = await Users.findOne({ where: { email: guestEmail } })
        
        if (!guest) 
            return res.status(404).json({ 
                message: 'Guest user not found' 
            })

        try {
            const schedule = await Schedules.create({
                ownerId,
                guestId: guest.id,
                scheduleName,
                scheduleDate,
                talkingPoints
            })
      
            return res.status(201).json({
                message: 'Schedule created successfully',
                schedule
            })
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({
                error: error.message
            })
        }
    }

    async getSchedulesByUserId(req, res) {
        const { id } = req.params
        const decodedId = req.decodedId

        if (id != decodedId)
            return res.status(403).json({
                message:"No permissions to perform this action"
            })

        try {
            const schedules = await Schedules.findAll({
                where: {
                  ownerId: id
                },
                include: [
                    {   model: Users, as: 'owner', 
                        attributes: { exclude: ['password'] } 
                    },
                    {   model: Users, as: 'guest', 
                        attributes: { exclude: ['password'] } 
                    }
                ]
            })


            
            return res.status(200).json({ schedules})
        } catch (error) {
            return res.status(500).json({
                error: error.message
            })
        }
    }

    async updateSchedule(req, res) {
        const { id } = req.params
        const decodedId = req.decodedId
        
        const schedule = await Schedules.findByPk(id)
        
        if (!schedule) 
            return res.status(404).json({ 
                message: 'Schedule not found' 
            })

        if (schedule.ownerId != decodedId)
            return res.status(403).json({
                message:"No permissions to perform this action"
            })

        try {
            const { scheduleName, scheduleDate, guestEmail, talkingPoints } = req.body

            const updatedSchedule = await schedule.update(
                { scheduleName, scheduleDate, guestEmail, talkingPoints }, 
                { returning: true }
            )

            return res.status(200).json({
                message: 'Schedule updated successfully',
                updatedSchedule
            })

        } catch (error) {
            
        }
    }

    async deleteSchedule(req, res) {
        const { id } = req.params
        const decodedId = req.decodedId

        if (id != decodedId)
            return res.status(403).json({
                message:"No permissions to perform this action"
            })
        
        const schedule = await Schedules.findByPk(id)

        if (!schedule) 
            return res.status(404).json({ 
                message: 'Schedule not found' 
            })

        try {
            await schedule.destroy()
    
            return res.status(204).json({})
        } catch (error) {
            return res.status(500).json({ 
                essage: error.message
            })
        }
    }
}

module.exports = new ControllerSchedules()
