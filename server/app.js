var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');
var authRouter = require('./routes/auth');

var app = express();

server.use(express.static("./public"))
server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));

// https://mgsdb.com/
server.use('/', indexRouter);

// https://mgsdb.com/users
server.use('/users', usersRouter);

// https://mgsdb.com/api
server.use('/api', apiRouter);

// https://mgsdb.com/auth
server.use('/auth', authRouter);

module.exports = server;
