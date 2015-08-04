var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
	listenables: [Actions],
	getFoos: function() {
		return Api.get('foos')
		.then(function(json){
			this.foos = json.results;
			this.triggerChange();
		}.bind(this));
	},
	triggerChange: function() {
		this.trigger('change', this.foos);
	}
});