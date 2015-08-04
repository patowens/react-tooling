var React = require('react');
var Actions = require('../actions');
var Reflux = require('reflux');

module.exports = React.createClass({
	render: function() {
		console.log(this);
		return <div className="foo">
			I am a foo named { this.props.params.id }
		</div>
	}
});