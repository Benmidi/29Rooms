'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    RegistrationConstants = require('../constants/RegistrationConstants'),
    {AsyncStorage, NativeModules} = require('react-native'),
    {EventEmitter} = require('events'),
    _ = require('lodash'),
    Parse = require('parse');

var CHANGE_EVENT = 'change';

var _user = {};

var UserStore = _.extend({}, EventEmitter.prototype, {
  /**
   * Get the user
   * @return {obj}
   */
  get: function() {
    return _user;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {

  switch(action.actionType) {
    case RegistrationConstants.ActionTypes.USER_CREATE_ACCOUNT:
      handleCreateAccount(action.userId);
      UserStore.emitChange();
      break;
    case RegistrationConstants.ActionTypes.USER_SUBMIT_NAME:
      handleSubmitName(action.userName);
      UserStore.emitChange();
      break;
    case RegistrationConstants.ActionTypes.CLEAR_USER:
      handleClearUser();
      UserStore.emitChange();
      break;

    default:
      // no op
  }
});

function handleCreateAccount(id){
  _user.id = id;
}

function handleSubmitName(name){
  _user.name = name;
}

function handleClearUser(){
  _user = {};
}

module.exports = UserStore;
