'use strict'

var RegistrationActions = require('../actions/RegistrationActions'),
    UserStore = require('../stores/UserStore'),
    Scan = require('./Scan'),
    Name = require('./Name'),
    React = require('react-native'),
    _ = require('lodash');

var {
  View,
  StyleSheet,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

var RegistrationApp = React.createClass({
	getInitialState: function() {
		return {
			ready: true,
			user: UserStore.get(),
		};
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

  render: function() {
    var component;

    if (this.state.user.id) {
      component = <Name {...this.state} />;
    } else {
    	component = <Scan />;
    }

    return(
      <View>{component}</View>
    );
  }
});

module.exports = RegistrationApp;
