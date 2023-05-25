
const User = require('../models/user')


class userRepository {

    async CreateUser(doc) {
        const { name, lastname, email, password, nickname, phone, verified } = doc

        const createdUser = await new User({
            name,
            lastname,
            email,
            password,
            nickname,
            phone,
            verified
        })
        try {
            await createdUser.save()
            return createdUser
        } catch (error) {
            throw new Error(error)
        }


    }

    async FindUser({ email }) {
        const foundUser = await User.findOne({ email: email })

        return foundUser
    }

    async FindUserById({ uID }) {
        const foundUser = await User.findById(uID)

        return foundUser
    }

    async updateUser(uID, doc) {
        const updatedUser = await User.findByIdAndUpdate(uID, doc)

        return await updatedUser.save()

    }

}

module.exports = userRepository


