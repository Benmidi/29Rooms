/** @jsx React.DOM */
var React = require('react');
// var ParseReact = require('parse-react');


var User = React.createClass({
  mixins: [ParseReact.Mixin],
  // getInitialState: function () {
  // //  return AuthStore.getState();
  // },
  // setStateOnAuth: function (loggedIn) {
  // //  this.setState(AuthStore.getState());
  // },
  // componentWillMount: function () {
  //  // AuthStore.authOnChangeHeader(this.setStateOnAuth);
  // },

  observe: function() {
    return {
      users: (new Parse.Query('Users')).ascending('createdAt')
    };
  },
  render: function () {
    console.log("hello");
    console.log(this.data.users);
    return (
      <div className="User">
        <h1>User id: {this.props.params.userID}</h1>
        <h2>{this.data.users}</h2>
      </div>
    );
  }
});

module.exports = User;
