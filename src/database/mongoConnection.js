const { databaseRepository } = require('./repository')
const { DBNAME } = require('../config/index')

module.exports = async () => {
    const repository = new databaseRepository()

    await repository.connect('mongoDB', DBNAME).then(
        () => {
            console.info({ info: `${DBNAME} connected.` })
        },
        err => {
            console.error(err)
        }

    )

};
