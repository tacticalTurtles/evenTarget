var helper = require('../utils/helpers.js');
var yelp = require('../utils/yelp.js');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var Promise = require('bluebird');
var path = require('path');
// var searchEventbrite = Promise.promisify(eventbrite.getEventbriteData);
// var searchYelp = Promise.promisify(helper.searchYelp);
var authenticate = require('../middleware/authenticate.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../../client/dist'));

// TESTING USER AUTH
var users = require('./users.js');
var auth = require('./auth.js');
app.use('/api/users', users);
app.use('/api/auth', auth);
// TESTING USER AUTH

app.post('/getData', function(req, res, next) {
	helper.searchYelp(req.body.term, req.body.location, (data) => {
		for (let i = 0; i < data.businesses.length; i++) {
			var desc = '';
			for (let category of data.businesses[i].categories) {
				desc += category[0] + ' ';
			}
			var loc = data.businesses[i].location.display_address.join(' ').replace(/[^\w\s]/gi, '');

			var event = {
	      name: data.businesses[i].name,
	      description: desc,
	      location: loc,
	      url: data.businesses[i].url,
	      image: data.businesses[i].image_url
			};
			helper.insertData(event, (insertedData) => {

			});
		}
		// search eventbrite api using term and location params & cb(data)
		eventbrite.getEventbriteData(req.body.term, req.body.location, (eventbriteData) => {
			var loc = eventbriteData.location.address ? eventbriteData.location.address: '';
			for(let i = 0; i < eventbriteData.events.length; i++) {
				var event = {
		      name: eventbriteData.events[i].name.text,
		      description: eventbriteData.events[i].description.text,
		      location: loc,
		      url: eventbriteData.events[i].url,
		      image: eventbriteData.events[i].logo.url,
		      searchapi: 'eventbrite'
				};
				helper.insertData(event, (insertedEbriteData) => {
					
				});
			}
		});
		// query events table using term and location params & cb(data)
		helper.getData(req.body.term, req.body.location, (allData) => {
			res.send(allData)
		});
	});

});

app.get('/getData', function(req, res, next) {
	helper.getData((data) => res.send(data))
});

app.post('/postcomment', function(req, res, next) {
	helper.insertIntoComments(req.body.comment, req.body.eventid, (inserted) => {
		res.send(req.body.comment);
	});
});

app.post('/getcomments', function(req, res, next) {
	helper.getEventComments(req.body.getEventid, (comments) => {
		res.send(comments);
	});
});

app.post('/postComfort', function(req, res, next) {
  helper.postComfort( req.body, (data) => {
    res.send(data);
  });
});

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});
        
app.post('/getComfort', (req, res, next) => {
  helper.getComfort( req.body.id, (data) => {
    res.send(data);
  });
});


module.exports = app;