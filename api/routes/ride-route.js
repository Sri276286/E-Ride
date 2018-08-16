const express = require('express');
const app = express();
const rideRouter = express.Router();

// get all rides
rideRouter.route('/eride/ride/get').get(function (req, res) {
    Ride.getRides(function (err, rides) {
        if (err) {
            throw err;
        }
        res.json(rides);
    });
});

// add a ride
rideRouter.route('/eride/ride/add').post(function (req, res) {
    var ride = req.body;
    Ride.addRide(ride, function (err, user) {
        if (err) {
            throw err;
        }
        res.json(user);
    });
});

// get rides by signum
rideRouter.route('/eride/ride/get/:signum').get(function (req, res) {
    var signum = req.params.signum;
    Ride.getRidesBySignum(signum, function (err, ride) {
        if (err) {
            throw err;
        }
        res.json(ride);
    });
});

// get rides by ride_type
rideRouter.route('/eride/ride/:ride_type').get(function (req, res) {
    var ride_type = req.params.ride_type;
    var start_location = req.query.start_location;
    if (start_location) {
        const locationRegex = new RegExp(escapeRegex(start_location), 'gi');
        Ride.filterRides(ride_type, locationRegex, function (err, rides) {
            if (err) {
                throw err;
            }
            res.json(rides);
        });
    } else {
        Ride.getRidesByType(ride_type, function (err, ride) {
            if (err) {
                throw err;
            }
            res.json(ride);
        });
    }
});

// get rides by signum and type
rideRouter.route('/eride/ride/get/:signum/:ride_type').get(function (req, res) {
    var signum = req.params.signum;
    var ride_type = req.params.ride_type;
    Ride.getRidesBySignumAndType(signum, ride_type, function (err, ride) {
        if (err) {
            throw err;
        }
        res.json(ride);
    });
});

// update ride
rideRouter.route('/eride/ride/update/:ride_id').put(function (req, res) {
    var ride_id = req.params.ride_id;
    var ride = req.body;
    Ride.updateRide(ride_id, ride, {}, function (err, ride) {
        if (err) {
            throw err;
        }
        res.json(ride);
    });
});

// delete ride
rideRouter.route('/eride/ride/delete/:ride_id').delete(function (req, res) {
    var ride_id = req.params.ride_id;
    Ride.deleteRide(ride_id, function (err, ride) {
        if (err) {
            throw err;
        }
        res.json(ride);
    });
});

module.exports = rideRouter;