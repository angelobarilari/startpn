const { compare } = require('bcrypt')
const jwt = require('jsonwebtoken')
const Users = require("../models/Users")

class ControllerSession {
    async login(req, res) {
        const { email, password } = req.body
        if (!email || !password)
            return res.status(401).json({
                message: "No credentials provided"
            })
        
            
        try {
            const user = await Users.findOne({ where: { email } })
            if (!user) 
                return res.status(401).json({
                    message: 'Invalid email or password'
                })
            const passwordMatch = await compare(password, user.password)

            if (!passwordMatch) 
                return res.status(401).json({
                    message: 'Invalid email or password'
                })
            
            const token = jwt.sign(
                { userId: user.id }, 
                process.env.TOKEN_CLIENT, 
                { expiresIn: '1h' }
            )
            
            return res.status(200).json({ token })
        } catch (error) {
            return res.status(500).json({
                message: error.message
            })
        }
    }
}

module.exports = new ControllerSession()