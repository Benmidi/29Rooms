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
  },
  instructions: {
    color: 'white',
    fontSize: 20,
  },
  doneContainer: {
    height: 60,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneText: {
    color: '#363380',
    fontSize: 30,
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
          <View style={styles.doneContainer}>
            <Text style={styles.doneText}>Done</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
});

module.exports = Done;
