const router = require('express').Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register, (req, res) => {
    return res.status(200).json(res.locals.user);
});

router.post('/login', authController.login, (req, res) => {
    return res.status(200).json(res.locals.user);
});

module.exports = router;