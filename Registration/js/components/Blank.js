'use strict'

var React = require('react-native');

var {
  View,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#363380',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    height: RegistrationConstants.HEIGHT,
  },
});

var Blank = React.createClass({

  getInitialState: function() {
    return {
      ready: true,
    };
  },

  render: function() {
    return(
      <View style={styles.container}>
      </View>
    );
  }
});

module.exports = Blank;
