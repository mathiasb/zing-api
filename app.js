var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression');
var mongoose = require('mongoose');
var cors = require('cors');

var appRoutes = require('./routes/app');

var corsOptions = {
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept'
};
var app = express();
// uncomment after setting up database stuff properly
//mongoose.connect('localhost:27017/zingdb-tst');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// use gzip compression
//app.use(compression());
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors(corsOptions));

app.use('/', appRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('_index');
});

module.exports = app;
