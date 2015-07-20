'use strict'

var RegistrationActions = require('../actions/RegistrationActions'),
    UserStore = require('../stores/UserStore'),
    Scan = require('./Scan'),
    Name = require('./Name'),
    Done = require('./Done'),
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

    console.log('THIS.STATE APP', this.state);

    if (!this.state.user.id) {
      component = <Scan />;
    } else if (this.state.user.id && !this.state.user.name){
    	component = <Name {...this.state} />;
    } else {
    	component = <Done {...this.state} />;
    }

    return(
      <View>{component}</View>
    );
  }
});

module.exports = RegistrationApp;
