var mongoose = require('mongoose');

// create schema

var userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    signum: {
        type: String,
        required: true
    },
    mail_id: {
        type: String,
        required: true
    },
    contact_number: {
        type: Number,
        required: true
    },
    address: {
        type: String
    },
    about_me: {
        type: String
    },
    interested_topics: {
        type: Array,
        required: true
    },
    creation_date: {
        type: Date,
        default: Date.now
    }
});

var User = module.exports = mongoose.model('User', userSchema);

// Register or Create User
module.exports.addUser = function (user, callback) {
    User.create(user, callback);
}

// Get Users
module.exports.getUsers = function (callback, limit) {
    User.find(callback).limit(limit);
}

// Get User By Id
module.exports.getUserBySignum = function (signum, callback, limit) {
    var query = {
        signum: signum
    };
    User.find(query, callback, limit);
}

// Edit User
module.exports.editUser = function (signum, user, options, callback) {
    var query = {
        signum: signum
    };
    var edit = {
        first_name: user.first_name,
        last_name: user.last_name,
        signum: signum,
        mail_id: user.mail_id,
        contact_number: user.contact_number,
        address: user.address,
        about_me: user.about_me,
        interested_topics: user.interested_topics
    };
    User.findOneAndUpdate(query, edit, options, callback);
}

// Delete User
module.exports.deleteUser = function (signum, callback) {
    var query = {
        signum: signum
    };
    User.remove(query, callback);
}