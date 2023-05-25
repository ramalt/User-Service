const { userRepository } = require('../database/repository')
const { generateHash, validateHash } = require('../utils/hash')
const { generateSign, validateLink } = require('../utils/jwt')
const mailer = require('../utils/mailer')


class userService {

    constructor() {
        this.repository = new userRepository();
    }

    async register(doc) {

        const { name, lastname, email, password, nickname, phone, verified } = doc

        const hashedPass = await generateHash(password)


        const newUser = await this.repository.CreateUser({
            name,
            lastname,
            email,
            password: hashedPass,
            nickname,
            phone,
            verified
        })
        const token = await generateSign({ email: email, id: newUser._id })
        newUser.token = token

        console.log({ newUser })
        if (newUser) return { user: newUser, token }



    }

    async login(doc) {
        const { email, password } = doc
        const loggedUser = await this.repository.FindUser({ email })

        if (loggedUser) {
            const valid = await validateHash(password, loggedUser.password)
            if (valid) {
                const token = await await generateSign({ email: loggedUser.email, id: loggedUser._id })
                loggedUser.token = token
                console.log({ loggedUser })
                return token
            }
        }
    }

    async getProfile(doc) {
        const { uID } = doc
        const user = await this.repository.FindUserById({ uID })

        if (user) {
            return user
        } else {
            return 'user no fpund'
            // throw new Error('user not found')
        }
    }

    async update(uID, doc) {
        const { email, name, lastname, phone } = doc
        const user = await this.repository.updateUser(uID, {
            email,
            name,
            lastname,
            phone
        })
        return user
    }

    async sendVerification(doc) {
        const { email } = doc
        const user = await this.repository.FindUser({ email })

        if (!user) {
            return 'email is not registered.'
        } else {
            const token = await generateSign({ email: user.email, id: user._id })
            const link = `http://127.0.0.1:3000/${user._id}/${token}`
            return await mailer({ email, link })
        }
    }

    async createNewPassword(doc) {
        const { uID, token, newPassword } = doc

        const data = await validateLink(token)
        // const uID = data.id
        const user = await this.repository.FindUserById({ uID })

        if (user.email === data.email) {
            const result = await this.repository.updateUser(uID, {
                password: await generateHash(newPassword)
            })
            return result
        }
    }

}

module.exports = userService