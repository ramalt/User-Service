const { userService } = require('../../services')
const service = new userService()

module.exports.signUp = async (req, res) => {

    const { name, lastname, email, password, nickname, phone, verified } = req.body
    const registered = await service.register({ name, lastname, email: email, password, nickname, phone, verified })

    res.status(200).send(registered)
}

module.exports.signIn = async (req, res) => {

    const { email, password } = req.body
    const result = await service.login({ email, password })

    res.status(200).send({ token: result })
}

//user profile
module.exports.getProfile = async (req, res) => {
    const uID = req.user.id
    const result = await service.getProfile({ uID })

    res.status(200).send({ user: result })
}

//profile update
module.exports.updateProfile = async (req, res) => {
    const uID = req.user.id
    const { email, name, lastname, phone } = req.body
    const result = await service.update(uID, {
        email,
        name,
        lastname,
        phone
    })

    await res.status(200).send({ user: result })
}

//get reset link by mail
module.exports.getVerificationLink = async (req, res) => {
    const { email } = req.body
    const verification = await service.sendVerification({ email })
    res.status(200).send({ message: verification })

}

//reset new password
module.exports.newPassword = async (req, res) => {
    const { uID, token } = req.params
    const { newPassword } = req.body
    const newPass = await service.createNewPassword({ uID, token, newPassword })
    res.status(200).send({ updated: newPass })
}