require('dotenv').config()

module.exports = {
    PORT : process.env.PORT || 3000,
    MONGODB: process.env.MONGODB,
    DBNAME: process.env.DBNAME,
    APPSECRET: process.env.APPSECRET,
    APPMODE: process.env.APPMODE.toString()
}