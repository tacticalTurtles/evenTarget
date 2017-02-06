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

exports.postComfort = (event, cb) => {
  console.log(event);
  db.query(`SELECT comfortNumber from comfort where eventId = ${event.id}`, (err, data) => {
    console.error(err);
    data += 1
    var queryString = `INSERT INTO comfort(comfort, comfortNumber)
      VALUES ('${event.comfort}','${data}')`;
    db.query(queryString, (err, data) => cb(data));
  });
};

exports.getComfort = function(id, cb) {
  var queryStr = `SELECT comfort and comfortNumber from comfort where eventId = '${id}'`;
  db.query(queryStr, (err, data) => {
    cb(data);
  })
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

