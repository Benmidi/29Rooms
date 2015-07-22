import React from 'react';
import Hello from './components/hello.jsx';
import { Parse } from 'parse';

Parse.initialize(
  'XR6QEwB3uUOhxCCT1jGigHQc9YO1vQHceRjrwAgN', 
  'oGY2hPgTLoJJACeuV3CJTihOMDlmE04UCUqq0ABb'
);

var App = React.createClass({
  getInitialState: function() {
    return {
      assets: [],
    };
  },
  componentWillMount: function () {
    var self = this;
    var gifList = Parse.Object.extend("Assets");
    var query = new Parse.Query(gifList);
    query.equalTo("account_id", document.location.pathname.split('/').pop());

    query.find({
      success: function(results) {
        var assets = [];
        console.log("Successfully retrieved ", results.length, " images.");
        for (var i = 0; i < results.length; i++) {
          var object = results[i];
          console.log(object.id, ' - ', object.get('asset'));
          assets.push(object.get('asset'));
        }
        self.setState({assets: assets});
      },
      error: function(error) {
        console.log("Error: ", error.code, " " + error.message);
      }
    });
  },

  handleClick: function () {
    window.alert('clicked');
  },

  render: function () {
    return (
      <Hello onClick={this.handleClick} {...this.state}></Hello>
    );
  }
});

React.render(<App></App>, document.getElementById('app'));
