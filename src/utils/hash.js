const bcrypt = require('bcrypt')

module.exports.generateHash = async (data) => {
    const salt = await bcrypt.genSalt(10)
    const generatedPassword = await bcrypt.hash(data, salt)

    return generatedPassword
}

module.exports.validateHash = async (data, encrypted) => {
    const salt = await bcrypt.genSalt(10)
    const valid = await bcrypt.compare(data, encrypted)

    return valid
}
