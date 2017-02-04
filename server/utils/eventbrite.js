var fetch = require('node-fetch');
// ?token=BRWUISPFFOSVMZBAS2WW

// search eventbrite api using term and location params & cb(data);
exports.getEventbriteData = function(term, location, cb) {
	var options = {
		headers: {
			Authorization: 'Bearer BRWUISPFFOSVMZBAS2WW'
		}
	};

	fetch(`https://www.eventbriteapi.com/v3/events/search?q=${term}&location.address=${location}`, options)
		.then( (resp) => {
			return resp.json();
		})
		.then( (data) => {
			cb(data);
		})
}
