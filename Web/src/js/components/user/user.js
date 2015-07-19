/** @jsx React.DOM */
var React = require('react');


var User = React.createClass({
  render() {
    return (
      <div className="User">
        <h1>User id: {this.props.params.userID}</h1>
        
      </div>
    );
  }
});

module.exports = User;
