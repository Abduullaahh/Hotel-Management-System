var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userbookRouter = require('./routes/userbookdata');
var getbookRouter = require('./routes/getbookdata');
var bookstatusRouter = require('./routes/bookstatus');
var empdatagetRouter = require('./routes/empdataget');
var empstatusRouter = require('./routes/empstatus');
var empdataRouter = require('./routes/empdata');
var reviewRouter = require('./routes/userreview');
var getreviewRouter = require('./routes/getreview');
var getforroomRouter = require('./routes/getforroom');
var getroomsRouter = require('./routes/getrooms');
var roomstatusRouter = require('./routes/roomstatus');
var bookedroomsRouter = require('./routes/bookedrooms');
var showbookedRouter = require('./routes/showbooked');
var deletebookedroomRouter = require('./routes/deletebookedroom');
var historydataRouter = require('./routes/historydata');
var showhistroyRouter = require('./routes/showhistroy');
var deleteapprovedRouter = require('./routes/deleteapproved');
var deleterejectedRouter = require('./routes/deleterejected');
const database = require('./database/mirage_hotel');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/userbookdata', userbookRouter);
app.use('/getbookdata', getbookRouter);
app.use('/bookstatus', bookstatusRouter);
app.use('/empdataget', empdatagetRouter);
app.use('/empstatus', empstatusRouter);
app.use('/empdata', empdataRouter);
app.use('/userreview', reviewRouter);
app.use('/getreview', getreviewRouter);
app.use('/getforroom', getforroomRouter);
app.use('/getrooms', getroomsRouter);
app.use('/roomstatus', roomstatusRouter);
app.use('/bookedrooms', bookedroomsRouter);
app.use('/showbooked', showbookedRouter);
app.use('/deletebookedroom', deletebookedroomRouter);
app.use('/historydata', historydataRouter);
app.use('/showhistroy', showhistroyRouter);
app.use('/deleteapproved', deleteapprovedRouter);
app.use('/deleterejected', deleterejectedRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
