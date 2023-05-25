const bodyParser = require('body-parser')
var cors = require('cors')

const { userRoutes } = require('../api/routes')


module.exports = async (app) => {

    app.use(bodyParser.json())
    // app.use(cors())
    // app.use(errorHandler) //TODO
    userRoutes(app)

    app.get('/', async (req, res) => {
        res.send({ hello: 'world' })
    })
}