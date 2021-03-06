const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const config = require('./config');
const homeRoute = require('./routes/home')
const authRoute = require('./routes/auth');
const followRoute = require('./routes/follow')
const profileRoute = require('./routes/profile');
const cors = require('cors');

const app = express();

mongoose.connect(config.database, { useNewUrlParser: true }, err => {
    if (err) {
        console.log(err)
    } else {
        console.log('connected to database'); 
    }  
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())
app.use(morgan('dev'));

app.use('/api', homeRoute);
app.use('/api/auth', authRoute);
app.use('/api/follow', followRoute);
app.use('/api/profile', profileRoute);

// Set Static Folder
app.use(express.static(path.join(__dirname, './public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

app.listen(config.port, err => {
    err ? console.log(err) : console.log('success');
})