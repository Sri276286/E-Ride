var mongoose = require('mongoose');

// create schema

var profileSchema = mongoose.Schema({
    signum: {
        type: String,
        required: true
    },
    no_of_rides_shared: {
        type: Number,
        required: true
    },
    no_of_rides_taken: {
        type: Number,
        required: true
    },
    amount_spent: {
        type: Number,
        required: true
    },
    amount_earned: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comments: {
        type: Array
    },
    creation_date: {
        type: Date,
        default: Date.now
    }
});

var Profile = module.exports = mongoose.model('Profile', profileSchema);

// Add Ride Profile
module.exports.addProfile = function (profile, callback) {
    Profile.create(profile, callback);
}

// Get Ride Profile By Signum
module.exports.getProfileBySignum = function (signum, callback, limit) {
    var query = {
        signum: signum
    };
    Profile.find(query, callback, limit);
}

// Update Ride Profile
module.exports.updateProfile = function (signum, profile, options, callback) {
    var query = {
        signum: signum
    };
    var update = {
        signum: signum,
        no_of_rides_shared: profile.no_of_rides_shared,
        amount_earned: profile.amount_earned,
        no_of_rides_taken: profile.no_of_rides_taken,
        amount_spent: profile.amount_spent,
        rating: profile.rating,
        comments: profile.comments
    };
    Profile.findOneAndUpdate(query, update, options, callback);
}