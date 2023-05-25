const yup = require("yup");

// Hidden for simplicity

const userSchema = yup.object({
    body: yup.object({
        name: yup.string().required(),
        lastname: yup.string().max(32).required(),
        email: yup.string().max(255).email().required(),
        verified: yup.boolean(),
        phone: yup.string().required(),
        password: yup.string().min(6).max(16).required()
    })
})

module.exports = { userSchema }