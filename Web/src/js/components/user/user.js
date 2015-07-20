/** @jsx React.DOM */
var React = require('react');

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
    var gifList = Parse.Object.extend("Assets");
    var query = new Parse.Query(gifList);
    query.equalTo("account_id", this.props.params.userID);

    console.log("QUERY", query);

    query.find({
      success: function(results) {
        console.log("Successfully retrieved ", results.length, " images.");
        // Do something with the returned Parse.Object values
        for (var i = 0; i < results.length; i++) {
          var object = results[i];
          console.log(object.id, ' - ', object.get('asset'));
        }
      },
      error: function(error) {
        console.log("Error: ", error.code, " " + error.message);
      }
    });

    return {
      users: (new Parse.Query('Users')).ascending('createdAt'),
      gifs: (new Parse.Query('Assets')).ascending('createdAt')
    };
  },
  render: function () {
    console.log("hello");
    console.log(this.data.users);
    return (
      <div className="User">
        <h1>User id: {this.props.params.userID}</h1>
        <h2>{this.data.users}</h2>
        <hr/>
        <ul>
         {this.data.users.map(function(c) {
           return <li>{c}</li>;
         })}
        </ul>
        <hr/>
        <ul>
         {this.data.gifs.map(function(g) {
           return <li><img src='{g}'/></li>;
         })}
        </ul>
      </div>
    );
  }
});

module.exports = User;
