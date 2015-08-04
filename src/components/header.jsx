var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Actions = require('../actions');
var FooStore = require('../stores/foo-store');
var Reflux = require('reflux');

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
    return <nav className="navbar navbar-inverse header">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Basic React Tooling
        </Link>
        <ul className="nav navbar-nav navbar-right">
          {this.renderFoos()}
        </ul>
      </div>
    </nav>
  },
  renderFoos: function() {
    return this.state.foos.slice(0, 4).map(function(foo){
      return <li key={foo.user.first}>
        <Link activeClassName="active" to={"foos/" + foo.user.name.first}>
          {foo.user.name.first}
        </Link>
      </li>
    });
  },
  onChange: function(event, foos) {
    this.setState({
      foos: foos
    });
  }
});
