var helper = require('../utils/queries.js');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// var db = require('./db.js');

// db.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../../client/dist'));



app.get('/data', function (req, res, next) {
  helper.getData(function (data) {
    res.send(data);
  });
});

app.post('/data', function (req, res, next) {
  var fakeData = {name: 'Off the grid', location: 'SF'};
  helper.insertData(fakeData, function (data) {
    console.log('success', data);
    res.end('success');
  });
});

module.exports = app;
