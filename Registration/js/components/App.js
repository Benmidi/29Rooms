'use strict'

var RegistrationActions = require('../actions/RegistrationActions'),
    UserStore = require('../stores/UserStore'),
    Scan = require('./Scan'),
    Fail = require('./Fail'),
    Name = require('./Name'),
    Done = require('./Done'),
    React = require('react-native');

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
			firstPass: true,
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

    if (this.state.user.firstPass) {
      component = <Scan />;
    } else if (!this.state.user.isRegistered && !this.state.user.name) {
    	component = <Name {...this.state} />;
    } else if (this.state.user.name && !this.state.user.thanks) {
    	component = <Blank />;
    } else if (this.state.user.thanks) {
    	component = <Done {...this.state} />;
    } else if (this.state.user.errorMessage) {
    	component = <Fail {...this.state} />;
    } else {
    	component = <Fail {...this.state} />;
    }

    return(
      <View>{component}</View>
    );
  }
});

module.exports = RegistrationApp;
