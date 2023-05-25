const { default: mongoose } = require("mongoose");
const { MONGODB } = require('../../config/index')

class DatabaseRepository {

    async connect(db, dbName) {
        switch (db) {
            case 'mongoDB':
                let dbUrl = MONGODB + dbName
                try {
                    await mongoose.connect(dbUrl)
                } catch (error) {
                    throw new Error(error)
                }
                break;

            default:
                throw new Error('"db" value is not defined.')
        }

    }
}

module.exports = DatabaseRepository