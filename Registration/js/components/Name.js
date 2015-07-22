'use strict'

var React = require('react-native'),
		RegistrationConstants = require('../constants/RegistrationConstants'),
		RegistrationActions = require('../actions/RegistrationActions'),
    _ = require('lodash');

var {
  View,
  StyleSheet,
  Text,
  TextInput,
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
  prompt: {
  	color: 'white',
    fontSize: 30,
    alignSelf: 'center',
  },
  name: {
    height: 40,
    borderRadius: 20,
    width: (RegistrationConstants.WIDTH / 4) * 3,
    marginLeft: (RegistrationConstants.WIDTH / 8),
    marginTop: 20,
    marginBottom: 20,
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    color: 'white',
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

var Name = React.createClass({

  getInitialState: function() {
    return {
      ready: true,
    };
  },

  _watchName: function(text){
    this.setState({
      name: text
    })
  },

  _submit: function(){
    //TODO: check if name is acceptable
    RegistrationActions.userSubmitName(this.state.name);
  },

  render: function() {
    return(
      <View style={styles.container}>
        <Text style={styles.prompt}>Please enter your name:</Text>
        <TextInput onChangeText={this._watchName} style={styles.name} />
        
        <TouchableHighlight onPress={this._submit} style={styles.submitButton}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

module.exports = Name;
