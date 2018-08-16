const express = require('express');
const app = express();
const profileRouter = express.Router();

// get profile by signum
profileRouter.route('/eride/profile/get/:signum').get(function (req, res) {
    var signum = req.params.signum;
    Profile.getProfileBySignum(signum, function (err, profile) {
        if (err) {
            throw err;
        }
        res.json(profile);
    });
});

// add a ride profile
profileRouter.route('/eride/profile/add').post(function (req, res) {
    var profile = req.body;
    Profile.addProfile(profile, function (err, profile) {
        if (err) {
            throw err;
        }
        res.json(profile);
    });
});

// update profile
profileRouter.route('/eride/profile/update/:signum').put(function (req, res) {
    var signum = req.params.signum;
    var profile = req.body;
    Profile.updateProfile(signum, profile, {}, function (err, profile) {
        if (err) {
            throw err;
        }
        console.log('profile here ', profile);
        res.json(profile);
    });
});


module.exports = profileRouter;