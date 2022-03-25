const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    profilePicture: {
        type: String,
        default: 'flash-dantz-ul37npXbla8-unsplash.jpg'
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;