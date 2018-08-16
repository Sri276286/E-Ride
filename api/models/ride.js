var mongoose = require('mongoose');

// create schema

var rideSchema = mongoose.Schema({
    ride_id: {
        type: Number,
        required: true
    },
    signum: {
        type: String,
        required: true
    },
    ride_type: { // Office/Trip
        type: String,
        required: true
    },
    service_type: { // Share/Take
        type: String,
        required: true
    },
    vehicle_type: { // Bike/Car
        type: String,
        required: true
    },
    occurence: { // Daily/Once
        type: String,
        required: true
    },
    details: {
        type: String
    },
    start_location: {
        type: String,
        required: true
    },
    end_location: {
        type: String,
        required: true
    },
    ride_date: {
        type: Date
    },
    no_of_seats: {
        type: Number,
        required: true
    },
    no_of_kms: {
        type: Number,
        required: true
    },
    price_per_km: {
        type: Number,
        required: true
    },
    landmarks: {
        type: Array
    },
    start_time: {
        type: String
    },
    end_time: {
        type: String
    },
    creation_date: {
        type: Date,
        default: Date.now
    }
});

var Ride = module.exports = mongoose.model('Ride', rideSchema);

// Get All Rides
module.exports.getRides = function (callback, limit) {
    Ride.find(callback).limit(limit);
}

// Get All Rides By Type
module.exports.getRidesByType = function (ride_type, callback, limit) {
    var query = {
        ride_type: ride_type
    };
    Ride.find(query, callback).limit(limit);
}

// Get All Rides By Signum
module.exports.getRidesBySignum = function (signum, callback, limit) {
    var query = {
        signum: signum
    };
    Ride.find(query, callback).limit(limit);
}

// Get All Rides By Signum And Type
module.exports.getRidesBySignumAndType = function (signum, ride_type, callback, limit) {
    var query = {
        signum: signum,
        ride_type: ride_type
    };
    console.log('query ', query);
    Ride.find(query, callback).limit(limit);
}

// Add Ride
module.exports.addRide = function (ride, callback) {
    Ride.create(ride, callback);
}

// Update Ride
module.exports.updateRide = function (ride_id, ride, options, callback) {
    var query = {
        ride_id: ride_id
    };
    var update = {
        ride_id: ride_id, 
        signum: ride.signum,
        ride_type: ride.ride_type,
        service_type: ride.service_type,
        vehicle_type: ride.vehicle_type,
        occurence: ride.occurence,
        details: ride.details,
        start_location: ride.start_location,
        end_location: ride.end_location,
        ride_date: ride.date,
        no_of_seats: ride.no_of_seats,
        no_of_kms: ride.no_of_kms,
        price_per_km: ride.price_per_km,
        landmarks: ride.landmarks,
        start_time: ride.start_time,
        end_time: ride.end_time
    };
    Ride.findOneAndUpdate(query, update, options, callback);
}

// Delete Ride
module.exports.deleteRide = function (ride_id, callback) {
    var query = {
        ride_id: ride_id
    };
    Ride.remove(query, callback);
}

// Filter Rides By Location
module.exports.filterRides = function (ride_type, start_location, callback, limit) {
    var query = {
        ride_type: ride_type,
        start_location: start_location
    };
    Ride.find(query, callback).limit(limit);
}