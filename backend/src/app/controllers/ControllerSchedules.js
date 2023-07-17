const Schedules = require('../models/Schedules')
const Users = require('../models/Users')

class ControllerSchedules {
    async createSchedule(req, res) {
        const { scheduleName, startDate, endDate, guestEmail, talkingPoints } = req.body
        
        if (!scheduleName || 
            !startDate || 
            !endDate || 
            !guestEmail || 
            !talkingPoints)
            return res.status(400).json({
                message: "Missing data "
            })

        const guest = await Users.findOne({ where: { email: guestEmail } })
        
        if (!guest) 
            return res.status(404).json({ 
                message: 'Guest user not found' 
            })

        try {
            const schedule = await Schedules.create({
                ownerId: req.decodedId,
                guestId: guest.id,
                scheduleName,
                startDate,
                endDate,
                talkingPoints
            })
      
            return res.status(201).json({
                message: 'Schedule created successfully',
                schedule
            })
        } catch (error) {
            return res.status(500).json({
                error: error.message
            })
        }
    }

    async getSchedulesByUserId(req, res) {
        try {
            const schedules = await Schedules.findAll({
                where: {
                  ownerId: req.decodedId
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
        try {
            const { id } = req.params
            const schedule = await Schedules.findByPk(id)
            
            if (!schedule) 
                return res.status(404).json({ 
                    message: 'Schedule not found' 
                })
    
            if (schedule.ownerId != req.decodedId)
                return res.status(403).json({
                    message:"No permissions to perform this action"
                })

            const { scheduleName, startDate, endDate, guestId, talkingPoints } = req.body
            
            const updatedSchedule = await schedule.update(
                { scheduleName, startDate, endDate, guestId, talkingPoints }, 
                { returning: true }
            )

            return res.status(200).json({
                message: 'Schedule updated successfully',
                updatedSchedule
            })

        } catch (error) {
            return res.status(500).json({ 
                essage: error.message
            })
        }
    }

    async deleteSchedule(req, res) {   
        try {
            const { id } = req.params
            const schedule = await Schedules.findByPk(id)
    
            if (!schedule) 
                return res.status(404).json({ 
                    message: 'Schedule not found' 
                })
    
            if (schedule.ownerId != req.decodedId)
                return res.status(403).json({
                    message:"No permissions to perform this action"
                })

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
