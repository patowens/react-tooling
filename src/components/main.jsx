var React = require('react');
var Header = require('./header');
var FooList = require('./foo-list');
var Footer = require('./footer');

module.exports = React.createClass({
	render: function() {
		return <div>
			<Header />
			{this.content()}
			<Footer />
		</div>
	},
	content: function() {
		if(this.props.children) {
			return this.props.children
		} else {
			return <FooList />
		}
	}
});