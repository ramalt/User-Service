
const { APPMODE } = require('../../config')

module.exports.handleDuplicateKeyError = (err, req, res, next) => {

    if (err) {
        if (err.code == 11000) {
            const error = {
                message: `invalid values: ${Object.keys(result.keyPattern)}, please check and try again.`
            }
            res.send({ error })
        }

        res.status(400).json({
            success: false,
            status: err.status,
            message: err,
            stack: process.env.NODE_ENV === 'development' ? err.stack : {}
        })

    } else {
        next()
    }
}

module.exports.handleRouteErrors = (req, res, next) => {
    const err = new Error(`URL ${req.path} is not resolved`)
    res.status(404).send({
        message: err.message,
        stack: APPMODE === 'development' ? err.stack : {}
    })
    next(err)
}

module.exports.globalHandler = (err, req, res, next) => {
    res.status(400).send({
        message: err.message,
        stack: APPMODE === 'development' ? err.stack : {}
    })
}

// module.exports.handleValidationError = (req, res) => {

//     let errors = Object.values(req.errors).map(el => el.message)
//     let fields = Object.values(req.errors).map(el => el.path)

//     if (errors.length > 1) {
//         const formattedErrors = errors.join('')
//         res.status(400).send({ messages: formattedErrors, fields: fields })
//     } else {
//         res.status(400).send({ messages: errors, fields: fields })
//     }
// }


