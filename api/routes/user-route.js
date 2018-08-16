const express = require('express');
const app = express();
const userRouter = express.Router();

// get users
userRouter.route('/eride/user/get').get(function (req, res) {
    User.getUsers(function (err, users) {
        if (err) {
            throw err;
        }
        res.json(users);
    });
});

// register new user
userRouter.route('/eride/user/register').post(function (req, res) {
    var user = req.body;
    User.addUser(user, function (err, user) {
        if (err) {
            throw err;
        }
        res.json(user);
    });
});

// get user by signum
userRouter.route('/eride/user/get/:signum').get(function (req, res) {
    var signum = req.params.signum;
    User.getUserBySignum(signum, function (err, user) {
        if (err) {
            throw err;
        }
        res.json(user);
    });
});

// edit user
userRouter.route('/eride/user/edit/:signum').put(function (req, res) {
    var signum = req.params.signum;
    var user = req.body;
    User.editUser(signum, user, {}, function (err, user) {
        if (err) {
            throw err;
        }
        res.json(user);
    });
});

// delete user
userRouter.route('/eride/user/delete/:signum').delete(function (req, res) {
    var signum = req.params.signum;
    User.deleteUser(signum, function (err, user) {
        if (err) {
            throw err;
        }
        res.json(user);
    });
});

module.exports = userRouter;