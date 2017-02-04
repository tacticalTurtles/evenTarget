var Yelp = require('yelp');
var helpers = require('./helpers.js');

//create a new yelp class using user generated keys
var yelp = new Yelp({
  consumer_key: 'oNlcvwBqtIHFHo5Ow-ZSPQ',
  consumer_secret: 'ePjb4srH3DcKi3ld1ot9bRVi3xg',
  token: 'hz1wy-S_tLCPF6acxQrZR9P66soCjkVg',
  token_secret: '6QL8s7Vsk_QNMiKQ4P6eiO02aCs',
});

module.exports = yelp;
