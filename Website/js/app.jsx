import React from 'react';
import Hello from './components/hello.jsx';
import UserStore from './stores/UserStore';
import AppActions from './actions/AppActions';


var App = React.createClass({
  getInitialState: function() {
    return {
      user: UserStore.get(),
    };
  },

  componentWillMount: function() {
    AppActions.fetchUserAssets();
  },

  componentDidMount: function() {
    UserStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    UserStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({
      user: UserStore.get(),
    });
  },

  handleClick: function () {
    window.alert('clicked');
  },

  render: function () {
    var component;

    if (this.state.user.loading) {
      component = <div>Loading</div>;
    } else {
      component = <Hello onClick={this.handleClick} {...this.state}></Hello>;
    }
    return (
      <div>{component}</div>
    );
  }
});

React.render(<App></App>, document.getElementById('app'));
