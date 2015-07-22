'use strict';

var Dimensions = require('Dimensions'),
    keyMirror = require('keymirror');

var HEIGHT = Dimensions.get('window').height,
    WIDTH = Dimensions.get('window').width;

module.exports = {

	HEIGHT: HEIGHT,
	WIDTH: WIDTH,

  ActionTypes: keyMirror({
    CHECK_USER_ID: null,
    USER_CREATE_ACCOUNT: null,
    USER_SUBMIT_NAME: null,
    CLEAR_USER: null,
  }),
};