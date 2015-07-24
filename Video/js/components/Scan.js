'use strict'

var React = require('react-native'),
    Camera = require('react-native-camera'),
    AppConstants = require('../constants/AppConstants'),
    AppActions = require('../actions/AppActions'),
    _ = require('lodash');

var {
  View,
  StyleSheet,
  Text,
} = React;

var styles = StyleSheet.create({
  camera: {
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: AppConstants.HEIGHT,
  },
  promptContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  prompt: {
    color: 'white',
    fontSize: 30,
  }
});

var Scan = React.createClass({

  getInitialState: function() {
    return {
      recording: false,
    };
  },

  record: function() {
    console.log('rec');
    this.refs.camera.capture({
      mode: Camera.constants.CaptureMode.video,
      target: Camera.constants.CaptureTarget.disk,
    },this._onCapture);
    setTimeout(function() {
      this.refs.camera.stopCapture();
    }.bind(this), 5000);
  },

  _onBarCodeRead: function(e){
    var userId;

    if(e.type === 'org.iso.QRCode'){
      userId = e.data.split("/").pop();
      //TODO: check if userId already exists
      AppActions.fetchUser(userId);
    } else {
      console.log('ERROR');
    }
  },

  _onCapture: function(e) {
    console.log('done', e);
  },

  render: function() {
    var component;

    if (!this.props.user) {
      component = (
        <View style={styles.promptContainer}>
          <Text style={styles.prompt}>Scan your room key</Text>
        </View>
      );
    } else {
      this.record();
      component = (
        <View style={styles.promptContainer}>
          <Text style={styles.prompt}>{this.props.question}</Text>
        </View>
      );
    }

    return(
      <View>
        <Camera
          ref="camera"
          style={styles.camera}
          onBarCodeRead={_.once(this._onBarCodeRead)}
          type={Camera.constants.Type.front}
          captureMode={Camera.constants.CaptureMode.video}
        />
        {component}
      </View>
    );
  }
});

module.exports = Scan;
