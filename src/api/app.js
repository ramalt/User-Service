const bodyParser = require('body-parser')
const cors = require('cors')
const { errorHandler } = require('../api/middlewares/')
const { userRoutes } = require('../api/routes')


module.exports = async (app) => {

    app.use(bodyParser.json())
    // app.use(cors())
    // app.use(errorHandler) //TODO
    userRoutes(app)

    app.all('*', errorHandler.handleRouteErrors)
    app.use(errorHandler.handleDuplicateKeyError)
    app.use(errorHandler.globalHandler)



    app.get('/', async (req, res) => {
        res.send({ hello: 'world' })
    })
}