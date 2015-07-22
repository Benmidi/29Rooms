'use strict'

var React = require('react-native'),
		RegistrationConstants = require('../constants/RegistrationConstants'),
		RegistrationActions = require('../actions/RegistrationActions'),
    _ = require('lodash');

var {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
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
  title: {
    color: 'white',
    fontSize: 30,
    alignSelf: 'center',
  },
  message: {
    color: 'white',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    width: (RegistrationConstants.WIDTH / 4) * 3,
    textAlign: 'center',
  },
  submitButton: {
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  submitText: {
    fontSize: 20,
    color: '#363380',
  },
});

var Fail = React.createClass({

  getInitialState: function() {
    return {
      ready: true,
    };
  },

  _restart: function(){
    RegistrationActions.clearUser();
  },

  render: function() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Haven't we met before?</Text>
        <Text style={styles.message}>This barcode has already been registered. Go to the rooms!</Text>

        <TouchableHighlight onPress={this._restart}>
          <View style={styles.submitButton}>
            <Text style={styles.submitText}>Ok</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
});

module.exports = Fail;
