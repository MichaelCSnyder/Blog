const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: ""
    },
    username: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        default: [],
    }

}, {timestamps: true});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;