const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

router.put('/:id', usersController.update, (req, res) => {
    return res.status(200).json(res.locals.updatedUser);
});

router.delete('/:id', usersController.delete, (req, res) => {
    return res.status(200).send('User successfully deleted!');
});

router.get('/:id', usersController.getUser, (req, res) => {
    return res.status(200).json(res.locals.user);
})

module.exports = router;