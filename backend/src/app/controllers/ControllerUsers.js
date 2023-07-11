const Users = require('../models/Users')
const hasNullOrUndefined = require('../utils/hasNullOrUndefined')
const { hash } = require('bcrypt')

class ControllerUsers {
    async getUsers(req, res) {
        try {
            const users = await Users.findAll()

            return res.status(201).json({ 
                users 
            })
        } catch (error) {
            return res.status(500).json({
                message: error.message
            })
        }
    }

    async createUser(req, res) {
        const { name, email, password } = req.body

        hasNullOrUndefined(res, name, email, password)

        const userExist = await Users.findOne({ where: { email } })

        if (userExist) 
            return res.status(409).json({ 
                message: 'Email already exists' 
            })

        try {
            const hashedPassword = await hash(password, 10)

            const createdUser = await Users.create({
                name,
                email,
                password: hashedPassword
            })

            const user = await Users.findByPk(createdUser.id, {
                attributes: { exclude: ['password'] }
            })
            
            return res.status(201).json({ 
                message: 'User created successfully', 
                user 
            })
        } catch (error) {
            return res.status(500).json({
                message: error.message
            })
        }
    }

    async getUserByEmail(req, res) {
        try {
            const { email } = req.body

            const user = await Users.findOne({
                where: { email },
                attributes: { exclude: ['password'] }
            })
        
            if (!user) 
                return res.status(404).json({ 
                    message: 'User not found' 
                })
        
            return res.status(200).json(user)
        } catch (error) {
            return res.status(500).json({ 
                message: error.message
            })
        }
    }

    async getUserById(req, res) {
        const { id } = req.params
        const decodedId = req.decodedId

        if (id != decodedId)
            return res.status(403).json({
                message:"No permissions to perform this action"
            })

        try {
            const user = await Users.findByPk(id, {
                attributes: { exclude: ['password'] }
            })
        
            if (!user) 
                return res.status(404).json({ 
                    message: 'User not found' 
                })
            
            return res.status(200).json(user)
        } catch (error) {
            return res.status(500).json({ 
                message: error.message
            })
        }
    }

    async updateUser(req, res) {
        const { id } = req.params
        const decodedId = req.decodedId

        if (id != decodedId)
            return res.status(403).json({
                message:"No permissions to perform this action"
            })

        const user = await Users.findByPk(id)

        if (!user) 
            return res.status(404).json({ 
                message: 'User not found' 
            })

        try {
            const { name, email, password } = req.body

            await user.update(
                { name, email, password }, 
                { returning: true }
            )

            const user = await Users.findByPk(id, {
                attributes: { exclude: ['password'] }
            })

            return res.status(200).json({ 
                message: 'User updated successfully',
                user 
            })
        } catch (error) {
            return res.status(500).json({ 
                message: error.message
            })
        }
    }

    async deleteUser(req, res) {
        const { id } = req.params
        const decodedId = req.decodedId

        if (id != decodedId)
            return res.status(403).json({
                message:"No permissions to perform this action"
            })

        const user = await Users.findByPk(id)

        if (!user) 
            return res.status(404).json({ 
                message: 'User not found' 
            })
            
        try {
            await user.destroy()

            return res.status(204).json({})
        } catch (error) {
            return res.status(500).json({ 
                message: error.message
            })
        }
    }
}

module.exports = new ControllerUsers()
