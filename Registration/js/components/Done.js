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
  thankyou: {
    color: 'white',
    fontSize: 30,
    alignSelf: 'center',
  },
  instructions: {
    color: 'white',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
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

var Done = React.createClass({

  getInitialState: function() {
    return {
    };
  },

  _restart: function(){
    RegistrationActions.clearUser();
  },

  render: function() {
    console.log('this.props', this.props);
    return(
      <View style={styles.container}>
      	<Text style={styles.thankyou}>Thanks {this.props.user.name}</Text>
        <Text style={styles.instructions}>Go to the rooms, yo.</Text>
        
        <TouchableHighlight onPress={this._restart}>
          <View style={styles.submitButton}>
            <Text style={styles.submitText}>Done</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
});

module.exports = Done;
