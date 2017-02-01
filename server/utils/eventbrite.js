var fetch = require('node-fetch');
// ?token=BRWUISPFFOSVMZBAS2WW

var getEventbriteData = function() {
	var options = {
		headers: {
			Authorization: 'Bearer BRWUISPFFOSVMZBAS2WW'
		},
		data: {
			q: 'party',
			sort_by: 'date'
		}
	};

	fetch('https://www.eventbriteapi.com/v3/events/search', options)
		.then( (resp) => {
			return resp.json();
		})
		.then( (data) => {
			console.log(Object.keys(data.events[0]));
			console.log('name', data.events[0].name.text)
			console.log('description', data.events[0].description.text)
			console.log('locale', data.events[0].locale)
			console.log('url', data.events[0].url)
			console.log('logo', data.events[0].logo.url)
		})
}

getEventbriteData();