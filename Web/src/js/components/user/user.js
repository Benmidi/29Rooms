/** @jsx React.DOM */
var React = require('react');

var User = React.createClass({
  mixins: [ParseReact.Mixin],
   getInitialState: function () {
     return {data: []};
   },
  // setStateOnAuth: function (loggedIn) {
  // //  this.setState(AuthStore.getState());
  // },
  componentWillMount: function () {
   // AuthStore.authOnChangeHeader(this.setStateOnAuth);
   console.log("componentWillMount");
  },

  observe: function() {
    console.log("OBSERVE");
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

    this.setState({
      users: (new Parse.Query('Users')).ascending('createdAt'),
      gifs: (new Parse.Query('Assets')).equalTo("account_id", this.props.params.userID).ascending('createdAt'),
      data: "TESTSTRING"
    });

    return {
      users: (new Parse.Query('Users')).ascending('createdAt'),
      gifs: (new Parse.Query('Assets')).equalTo("account_id", this.props.params.userID).ascending('createdAt')
    };
  },
  render: function () {
    var hasAssets = (this.data.gifs.length > 0) ? !!this.data.gifs : false;
    console.log("HAS ASSETS", hasAssets);
    console.log("hello");
    console.log(this.data.users);
    console.log("GIFS");
    console.log(this.data.gifs);
   //console.log("this.state.gifs", this.state.gifs);
   console.log(this.state.data);

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
            console.log("ASSETS");
            console.log(g);
           if (hasAssets) { 
             return <div><h3>CHECKPOINT {g.checkpoint}</h3><li><img src={g.asset._url} className='checkpointImages'/></li></div>;
           } else {
            return <h2>No photos!</h2>
           }
         })}
        </ul>
      </div>
    );
  }
});

module.exports = User;
