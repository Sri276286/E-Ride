var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

var app = express();
app.use(bodyParser.json());
app.use(cors());

userRouter = require('./routes/user-route');
profileRouter = require('./routes/profile-route');
rideRouter = require('./routes/ride-route');

User = require('./models/user');
Ride = require('./models/ride');
Profile = require('./models/profile');

// connect to mongoose
mongoose.connect('mongodb://localhost:27017/eride', {
    useNewUrlParser: true
}).catch(error => console.log('connection error ', error));
var db = mongoose.connection;

app.get('/', function (req, res) {
    res.send('Have a great and safe ride!');
});

// -------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------

// Register Routes
app.use('/api', userRouter);
app.use('/api', profileRouter);
app.use('/api', rideRouter);

// ----------------------------------------------------------------------------------------

app.listen(3000);
console.log('Running on port 3000...');


// fuzzy search
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};