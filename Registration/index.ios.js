/**
 * 29Rooms Registration App
 * Emily O'Brien
 * https://github.com/Emibob
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Registration = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeTheBitches}>
          I'm here bitches!
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcomeTheBitches: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('Registration', () => Registration);
