var Fetch = require('whatwg-fetch');
var rootUrl = 'http://api.randomuser.me/?results=10';

module.exports = window.api = {
	get: function(url) {
		url = '';
		return fetch(rootUrl + url)
		.then(function(response) {
			return response.json();
		})
	}
};