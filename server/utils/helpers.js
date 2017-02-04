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

exports.insertIntoUsers = function(user, cb) {
  var query = `insert into users(username, password) values ('${user.username}', '${user.password}')`;
  db.query(query, (error, data) => {
    cb(data);
  });
}

exports.getUser = function(user, cb) {
  var query = `select id from users where username = '${user.username}'`;
  db.query(query, function (err, data) {
    if (err) {
      throw err;
    }
    cb(data[0].id);
  });
}
