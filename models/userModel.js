const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    isim: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },

    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 50,
        lowercase: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },

    password: {
        type: String,
        required: true,
        trim: true,
    }
}, { collection: 'users', timestamps: true });
UserSchema.methods.joiValidation = function (userObject) {
    const schema = Joi.object({
        isim: Joi.string().min(3).max(50).trim().required(),
        userName: Joi.string().min(3).max(50).trim().required(),
        email: Joi.string().trim().email().required(),
        password: Joi.string().trim().required(),
    });
    return schema.validate(userObject);

}

const User = mongoose.model('User', UserSchema);




module.exports = User;