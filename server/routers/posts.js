const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

router.post('/', postsController.createPost, (req, res) => {
    return res.status(200).json(res.locals.post);
});

router.put('/:id', postsController.updatePost, (req, res) => {
    return res.status(200).json(res.locals.post);
});

router.get('/all', postsController.getPosts, (req, res) => {
    return res.status(200).json(res.locals.posts);
});

router.get('/:id', postsController.getSinglePost, (req, res) => {
    return res.status(200).json(res.locals.post);
})

router.delete('/:id', postsController.deletePost, (req, res) => {
    return res.status(200).send('Post successfully deleted!');
});

module.exports = router;