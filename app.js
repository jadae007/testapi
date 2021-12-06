var express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const phoneRouter = require('./routes/phone');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(cors( {
  origin: "http://localhost:3000",
  methods: "POST",
}

))



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/api/phone", phoneRouter);

module.exports = app;
