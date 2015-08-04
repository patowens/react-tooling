var React = require('react');
var Reflux = require('reflux');
var FooStore = require('../stores/foo-store');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(FooStore, 'onChange')
	],
	getInitialState: function() {
		return {
			foos: []
		}
	},
	componentWillMount: function() {
		Actions.getFoos();
	},
	render: function() {
		return <div className="list-group">
			{this.renderFoos()}
		</div>
	},
	renderFoos: function() {
		return this.state.foos.map(function(foo) {
			return <Link to={"foos/" + foo.user.name.first} className="list-group-item" key={foo.user.name.first}>
				<p>{foo.user.email}</p>
			</Link>
		});
	},
	onChange: function(event, foos) {
		this.setState({ foos: foos });
	}

});