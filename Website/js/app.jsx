import React from 'react';
import Hello from './components/hello.jsx';
import Parse from 'parse';

var App = React.createClass({
  handleClick: function () {
    window.alert('clicked');
  },

  render: function () {
    return (
      <Hello onClick={this.handleClick}></Hello>
    );
  }
});

React.render(<App></App>, document.getElementById('app'));
