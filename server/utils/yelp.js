var Yelp = require('yelp');
var helpers = require('./queries.js');

helpers.get

//create a new yelp class
var yelp = new Yelp({
  consumer_key: 'KoJawYiTg_ufBHXdWiNPTw',
  consumer_secret: 'toBv5Wx0MgN1TpsnbGH5KLuCoP8',
  token: 'VwAyKQfL_6J4slmBZI-yOZj2HNGzaB8A',
  token_secret: 'yhPs-T5M6WvJokUPasOLDF2j6gQ',
});

//testing to see if the call will work
yelp.search({ term: 'food', location: 'Montreal' })
.then(function (data) {
  console.log(data);
})
.catch(function (err) {
  console.error(err);
});