const User = require('../models/User');
const bcrypt = require('bcrypt');

const usersController = {};

usersController.update = async (req, res, next) => {
    // hash password if updating password
    if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.locals.updatedUser = updatedUser;
        return next();
    } catch (error) {
        return next({
            message: 'Error attempting to update user in usersController',
            log: 'Error: ' + error
        });
    }
};

usersController.delete = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        return next();
    } catch (error) {
        return next({
            message: 'Error occured attempting to delete user within usersController.delete',
            log: 'Error: ' + error
        });
    }
};

usersController.getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(400).send('Unable to find user')
        const {password, ...secureUser} = user._doc;
        res.locals.user = secureUser;
        return next();
    } catch (error) {
        return next({
            message: 'Error attempting to get user in usersController.getUser',
            log: 'Error: ' + error
        })
    }
}

module.exports = usersController;