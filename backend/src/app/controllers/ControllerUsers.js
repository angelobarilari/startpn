const Users = require('../models/Users')
const hasNullOrUndefined = require('../utils/hasNullOrUndefined')
const { hash } = require('bcrypt')

class ControllerUsers {
    async createUser(req, res) {
        const { name, email, password, confirmPassword } = req.body

        hasNullOrUndefined(res, name, email, password, confirmPassword)

        const userExist = await Users.findOne({ where: { email } })

        if (userExist) 
            return res.status(409).json({ 
                message: 'Email already exists' 
            })

        try {
            const hashedPassword = await hash(password, 10)

            const user = await Users.create({
                name,
                email,
                password: hashedPassword
            })
            
            user.password = undefined

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
            const { email } = req.params
        
            const user = await Users.findOne({ where: email})
        
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
        try {
            const { id } = req.params
        
            const user = await Users.findByPk(id)
        
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

            const updatedUser = await user.update(
                { name, email, password }, 
                { returning: true }
            )

            updatedUser.password = undefined

            return res.status(200).json({ 
                message: 'User updated successfully',
                user: updatedUser 
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
