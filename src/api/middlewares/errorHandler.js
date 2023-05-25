
const handleDuplicateKeyError = (req, res) => {

    const field = Object.keys(req.keyValue)
    const error = `An account with that ${field} already exists.`
    res.status(400).send({ messages: error, fields: field })
}

const handleValidationError = (req, res) => {

    let errors = Object.values(req.errors).map(el => el.message)
    let fields = Object.values(req.errors).map(el => el.path)

    if (errors.length > 1) {
        const formattedErrors = errors.join('')
        res.status(400).send({ messages: formattedErrors, fields: fields })
    } else {
        res.status(400).send({ messages: errors, fields: fields })
    }
}

module.exports = (err, req, res, next) => {
    try {
        if (err.name === 'ValidationError') return err = handleValidationError(req, res)
        if (err.code && err.code == 11000) return err = handleDuplicateKeyError(req, res)
    } catch (err) {
        res.status(500).send('An unknown error occurred.')
        throw new Error(err)
    }
}

// module.exports = (err, req, res, next) => {
//     console.log("Middleware Error Hadnling");
//     if (err) {
//         if (err.code == 11000) {
//             const error = {
//                 message: `invalid values: ${Object.keys(result.keyPattern)}, please check and try again.`
//             }
//             res.send({ error })
//         }

//         res.status(400).json({
//             success: false,
//             status: err.status,
//             message: err,
//             stack: process.env.NODE_ENV === 'development' ? err.stack : {}
//         })

//     } else {
//         next()
//     }


// }

