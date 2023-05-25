const { default: mongoose, Schema } = require("mongoose");
const validator = require('validator');

const userSchema = new Schema({
    name: { type: String },
    lastname: { type: String },
    email: {
        type: String,
        require: [true, 'Enter an email address.'],
        unique: [true, 'That email address is taken.'],
        lowercase: true,
        validate: [validator.isEmail, 'Enter a valid email address.']
    },
    password: {
        type: String,
        required: [true, 'Enter a password.'],
        minLength: [6, 'Password should be at least 6 characters']
    },
    phone: {
        type: String,
        unique: [true, 'That nickname is taken.']
    },
    verified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})



module.exports = mongoose.model('User', userSchema)