const User = require('../models/User');
const bcrypt = require('bcrypt');

const authController = {};

authController.register = async (req, res, next) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);
        const {username, email, profilePicture} = req.body;
        const user = await User.create({username, password, email, profilePicture});
        res.locals.user = user;
        return next();
    } catch (error) {
        return next({
            message: 'Error occored attempting to create new user in authController.register',
            log: 'Error: ' + error
        });
    }
};

authController.login = async (req, res, next) => {
    try {
        const user = await User.findOne({username: req.body.username});
        // verify user was found
        if (!user) return res.status(400).json('Wrong credentials');
        // verify correct password
        const valid = await bcrypt.compare(req.body.password, user.password);
        if (!valid) res.status(400).json('Wrong credentials');
        // user found and validated
        const {password, ...secureUser} = user._doc;
        res.locals.user = secureUser;
        return next();
    } catch (error) {
        return next({
            message: "Error occured attempting to find user in authController.login",
            log: 'Error: ' + error
        })
    }
};

module.exports = authController;