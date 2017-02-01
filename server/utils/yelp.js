var Yelp = require('yelp');
var helpers = require('./helpers.js');

//create a new yelp class
var yelp = new Yelp({
  consumer_key: 'oNlcvwBqtIHFHo5Ow-ZSPQ',
  consumer_secret: 'ePjb4srH3DcKi3ld1ot9bRVi3xg',
  token: 'hz1wy-S_tLCPF6acxQrZR9P66soCjkVg',
  token_secret: '6QL8s7Vsk_QNMiKQ4P6eiO02aCs',
});

// testing to see if the call will work
// yelp.search({ term: 'food', location: 'San Francisco' })
// .then(function (data) {
//   console.log(Object.keys(data.businesses[0]));
// })
// .catch(function (err) {
//   console.error(err);
// });

module.exports = yelp;
