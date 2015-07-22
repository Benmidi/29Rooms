import React from 'react';
import User from './components/User.jsx';
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

  render: function () {
    var component;

    if (this.state.user.loading) {
      component = <div>Loading</div>;
    } else {
      component = <User {...this.state}></User>;
    }
    return (
      <div>{component}</div>
    );
  }
});

React.render(<App></App>, document.getElementById('app'));
