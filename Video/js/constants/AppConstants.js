'use strict';

var Device = require('../utils/Device'),
    Dimensions = require('Dimensions'),
    keyMirror = require('keymirror');

var HEIGHT = Dimensions.get('window').height,
    WIDTH = Dimensions.get('window').width;

module.exports = {
  HEIGHT: HEIGHT,
  WIDTH: WIDTH,

  ActionTypes: keyMirror({
    FETCH_USER: null,
    SET_QUESTION: null,
  }),
};
