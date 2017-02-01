var db = require('../config/db.js');
var yelp = require('./yelp.js');
db.connect();

var methods = {};

exports.getData = function (cb) {
  db.query('SELECT * FROM events', function (err, data) {
    if (err) {
      throw err;
    }
    cb(data);
  });
};

exports.insertData = function (event, cb) {
  var queryString = `INSERT INTO events(name, location, description, url, image)
    VALUES ('${event.name}','${event.location}', '${event.description}', '${event.url}', '${event.image}')`;
  db.query(queryString, function (err, data) {
    // if (err) {
    //   throw err;
    // }
    cb(data);
  });
};

// Used in POST request to search yelp for term and location
exports.searchYelp = function(term, location, cb) {
  yelp.search({ term: term, location: location })
  .then(function(data) {
    cb(data);
  })
  .catch(function (err) {
    console.error(err);
  });
}

