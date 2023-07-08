const jwt = require('jsonwebtoken')

const { promisify } = require('util')

module.exports = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization)
        return res.status(401).json({
            message: "Missing token"
        })

    try {
        const token = authorization.split(" ")[1]

        const decodedToken = await promisify(jwt.verify)(token, process.env.TOKEN_CLIENT)

        req.decodedId = decodedToken.userId
    } catch (error) {
        return res.status(401).json({
            message: error.message
        })
    }

    return next()
}

