var db = require('../config/db.js');
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
  var queryString = `INSERT INTO events (name, description,location, url, image)
    VALUES ('${event.name}', '${event.description}',
    '${event.location}', '${event.url}', '${event.image}')`;
  db.query(queryString, function (err, data) {
    if (err) {
      throw err;
    }
    cb(data);
  });
};

// var test = {
//   name: 'test',
//   description: 'test',
//   locaton: 'test',
//   image: 'test'
// };

// insertData(test, function(err, data) {
//   if (err) {
//     throw err;
//   }

//   console.log('test worked');
// });