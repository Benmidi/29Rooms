'use strict'

var React = require('react-native'),
		Camera = require('react-native-camera'),
		RegistrationConstants = require('../constants/RegistrationConstants'),
		RegistrationActions = require('../actions/RegistrationActions'),
    _ = require('lodash');

var {
  View,
  StyleSheet,
  Text,
} = React;

var styles = StyleSheet.create({
  camera: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: RegistrationConstants.HEIGHT - 100
  },
  prompt: {
  	color: 'black'
  }
});

var Scan = React.createClass({

	_onBarCodeRead: function(e){
		var userId;

		if(e.type === 'org.iso.QRCode'){
			userId = e.data.split("/").pop();
			console.log('userId', userId);
			RegistrationActions.userCreateAccount(userId);
		} else {
			console.log('ERROR');
		}
	},

  render: function() {

    return(
      <View>
      	<Camera 
      		ref="camera"
      		style={styles.camera}
      		onBarCodeRead={_.once(this._onBarCodeRead)}
      		type={Camera.constants.Type.front}
     		/>
      	<Text style={styles.prompt}>Scan your room key</Text>
      </View>
    );
  }
});

module.exports = Scan;
