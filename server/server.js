const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('../routes/api/users');
const profile = require('../routes/api/profiles');

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config

const db = require('../config/keys').mongoURI;

// Connect to Mongo DB
mongoose
    .connect(db)
    .then(() => console.log('Mongo DB connected'))
    .catch(err => console.log(err));

app.use(passport.initialize());

// Passport Config
require('../config/passport')(passport);

// Use Routes 
app.use('/api/users', users);
app.use('/api/profile', profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
