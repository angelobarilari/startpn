require('dotenv').config()
const server = require('./app')

server.listen(process.env.APP_PORT || 3000, () => {
    console.log(`Server is running in port ${port}`)
});
