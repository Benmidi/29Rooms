'use strict'

var React = require('react-native'),
		RegistrationConstants = require('../constants/RegistrationConstants'),
		RegistrationActions = require('../actions/RegistrationActions'),
    _ = require('lodash');

var {
  View,
  StyleSheet,
  Text,
} = React;

var styles = StyleSheet.create({
  prompt: {
  	color: 'black'
  },
});

var Name = React.createClass({

  render: function() {

    return(
      <View>
      	<Text style={styles.prompt}>{this.props.user.id}</Text>
      </View>
    );
  }
});

module.exports = Name;
