var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');
var authRouter = require('./routes/auth');

var app = express();

app.use(cors({
    // CORS OPTIONS HERE

    // ONLY ALLOWS REQUESTS FROM  PORT 5173 
    // DURING DEVELOPEMENT
    "origin": 'http://localhost:5173',
    "optionsSuccessStatus": 200
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);
app.use('/auth', authRouter);

module.exports = app;
