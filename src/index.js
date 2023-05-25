const express = require('express')

const expressApp = require('../src/api/app')
const mongoConnection = require('./database/mongoConnection')

const { PORT } = require('../src/config/index')

const app = express()

expressApp(app)

//connect db
mongoConnection()

app.listen(PORT, () => {
    console.info({info: `Server running on http://127.0.0.1:${PORT}`})
}).on('error', (err) => {
    console.error(err)
})