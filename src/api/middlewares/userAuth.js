const { ValidateSignature } = require('../../utils/jwt');

module.exports = async (req, res, next) => {

    const isAuthorized = await ValidateSignature(req);

    if (isAuthorized && req.get('authKey')) {
        return next();
    }
    return res.status(403).json({ message: 'Not Authorized' })
}

