var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// viewed at http://localhost:8080

require('./models/User');

/* Connect to MongoDB */
mongoose.connect("mongodb://localhost/test", function (err, db) {
  if (err) {
    console.dir(err)
  } else {
    console.log("Connected to MongoDB");
  }
});

var users 		= require('./routes/users')(app, express);

app.use('/api', users);

app.use(express.static(path.join(__dirname + '/public')));

app.get('/*', function(req, res) {

  	res.sendFile(__dirname + '/public/index.html');
});

app.listen(8080, function () {
  console.log('Running ... viewed at http://localhost:8080')
});
