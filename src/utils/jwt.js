const jwt = require('jsonwebtoken')
const { APPSECRET } = require('../config/index')

module.exports.generateSign = async (payload) => {
    try {
        return await jwt.sign(payload, APPSECRET, { expiresIn: "1d" });
    } catch (error) {
        return error;
    }
}

module.exports.ValidateToken = async (req) => {

    const token = req.get("authKey");
    if (token) {
        try {
            const payload = await jwt.verify(token, APPSECRET)
            req.user = payload;
            return true;
        } catch (error) {
            console.log({ error })
            return false
        }
    }
}

module.exports.validateLink = async (token) => {
    try {
        const data = await jwt.verify(token, APPSECRET)
        return data
    } catch (error) {
        console.log({ error })
        return false
    }
}


