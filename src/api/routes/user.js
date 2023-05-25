const { userController } = require('../controllers')
const { schemaValidator, auth } = require('../middlewares')
const schema = require('../../schema/user')


module.exports = (app) => {

    app.post('/signup', schemaValidator(schema.userSchema), userController.signUp)
    app.post('/signin', userController.signIn)
    app.post('/forgot-pass', userController.getVerificationLink)

    app.get('/profile', auth, userController.getProfile)

    app.put('/profile', auth, userController.updateProfile)
    app.put('/:uID/:token', userController.newPassword)

}