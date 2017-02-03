var helper = require('../utils/helpers.js');
var yelp = require('../utils/yelp.js');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../../client/dist'));

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
				// Put something here for success
			})
		}
		res.send(data.businesses);
	})
});

app.get('/getData', function(req, res, next) {
	helper.getData((data) => res.send(data))
});

app.post('/postComfort', function(req, res, next) {
	helper.postComfort( req.body, (data) => {

	})
});

module.exports = app;
