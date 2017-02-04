var db = require('../config/db.js');
var yelp = require('./yelp.js');
db.connect();

var methods = {};

// ===============HELPER METHODS============
// queries events database using term params only (until we use more locations other than just SF)
exports.getData = function (term, location, cb) {
  var queryStr = `select * from events where name like '%${term}%' or description like'%${term}%'` // ADD THIS ONCE MORE LOCATIONS || or location like '%${location}%'
  db.query(queryStr, function (err, data) {
    if (err) {
      throw err;
    }
    cb(data);
  });
};

// inserts event into events database e.g. =>
// event = {
//   name: 'name',
//   location: 'location',
//   description: 'description',
//   url: 'url link',
//   image: 'image link'
// }
exports.insertData = function (event, cb) {
  var queryString = `INSERT INTO events(name, location, description, url, image, searchapi)
    VALUES ('${event.name}','${event.location}', '${event.description}', '${event.url}', '${event.image}', '${event.searchapi}')`;
  db.query(queryString, function (err, data) {
    cb(data);
  });
};

// search yelp api using term and location params & cb(data)
exports.searchYelp = function(term, location, cb) {
  yelp.search({ term: term, location: location })
  .then(function(data) {
    cb(data);
  })
  .catch(function (err) {
    console.error(err);
  });
}

// inserts comment and current event id into comments & cb(data)
exports.insertIntoComments = function(comment, eventid, cb) {
  var queryStr = `INSERT INTO comments(comment, eventid) VALUES ('${comment}', '${eventid}')`
  db.query(queryStr, (err, data) => {
    cb(data);
  })
}

exports.getEventComments = function(id, cb) {
  var queryStr = `SELECT comment from comments where eventid = '${id}'`;
  db.query(queryStr, (err, data) => {
    cb(data);
  })
}

exports.postComfort = (event, cb) => {
  db.query(`SELECT comfortNumber from comfort where eventId = ${event.id}`, (err, data) => {
    console.log(data);
    if (data.length === 0) {
      var queryString = `INSERT INTO comfort(comfort, comfortNumber, eventId)
        VALUES ('${event.comfort}','${event.comfortNumber}', '${event.id}')`;
      db.query(queryString, (err, data) => {
        console.error(err);
        cb(data);
      });
    } else {
      var queryString = `UPDATE comfort SET comfort = ${event.comfort}, 
      comfortNumber = ${event.comfortNumber} where eventId = ${event.id}`;
      db.query(queryString, (err, data) => {
        console.error(err);
        cb(data);
      });
    }
  });
};

exports.getComfort = function(id, cb) {
  var queryStr = `SELECT comfort, comfortNumber from comfort where eventId = '${id}'`;
  db.query(queryStr, (err, data) => {
    cb(data[0]);
  })
}
