const Post = require('../models/Post');
const multer = require('multer');
const path = require('path');

const postsController = {};

postsController.createPost = async (req, res, next) => {
    try {
        const post = await Post.create(req.body);
        res.locals.post = post;
        return next();
    } catch (error) {
        return next({
            message: 'Error attempting to add post to the database in postsController.createPost',
            log: 'Error: ' + error
        })
    }
};

postsController.updatePost = async (req, res, next) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.locals.post = updatedPost;
        return next();
    } catch (error) {
        return next({
            message: 'Error attempting to update post in postsController.updatePost',
            log: 'Error: ' + error
        });
    }
};

postsController.getSinglePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        res.locals.post = post;
        return next();
    } catch (error) {
        return next({
            message: 'Error occured attempting to get post in postsController.getPost',
            log: 'Error: ' + error
        });
    }
};

postsController.deletePost = async (req, res, next) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        return next();
    } catch (error) {
        return next({
            message: 'Error occured attempting to delete post in postsController.deletePost',
            log: 'Error: ' + error
        })
    }
}

postsController.getPosts = async (req, res, next) => {
    try {
        const posts = await Post.find({}, null, {sort: {createdAt: -1}});
        res.locals.posts = posts;
        return next();
    } catch (error) {
        return next({
            message: 'Error occured trying to get all posts in postsController.getPosts',
            log: 'Error: ' + error
        });
    }
};

module.exports = postsController;