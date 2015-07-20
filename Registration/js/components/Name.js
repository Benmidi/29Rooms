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
    fontSize: 30
  },
  name: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1
  },
  submit: {
    height: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    fontSize: 30,
    color: '#363380',
  },
});

var Name = React.createClass({

  getInitialState: function() {
    return {
    };
  },

  _watchName: function(text){
    this.setState({
      name: text
    })
  },

  _submit: function(){
    //TODO: check if name is acceptable
    //TODO: if so, send all user data at once to Parse
    RegistrationActions.userSubmitName(this.state.name);
  },

  render: function() {
    return(
      <View style={styles.container}>
        <Text style={styles.prompt}>Please enter your name:</Text>
        <TextInput onChangeText={this._watchName} style={styles.name}>{this.state.name}</TextInput>
        
        <TouchableHighlight onPress={this._submit} style={styles.submit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableHighlight>

      </View>
    );
  }
});

module.exports = Name;
