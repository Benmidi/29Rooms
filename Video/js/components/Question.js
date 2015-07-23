'use strict';

var AppConstants = require('../constants/AppConstants'),
    AppActions = require('../actions/AppActions'),
    React = require('react-native'),
    Camera = require('react-native-camera');

var {
  View,
  Text,
  StyleSheet,
} = React;

var Question = React.createClass({
  render: function() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', height: AppConstants.HEIGHT}}>
        <Text>Question</Text>
        <Camera
          ref="camera"
          style={styles.camera}
          type={Camera.constants.Type.front}
          aspect={Camera.constants.Aspect.fill}
          captureMode={Camera.constants.CaptureMode.video}
        />
      </View>
    );
  },
});

module.exports = Question;

var styles = StyleSheet.create({
  camera: {
    position: 'absolute',
    height: 100,
    width: 78,
    right: 10,
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

