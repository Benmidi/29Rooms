'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    RegistrationConstants = require('../constants/RegistrationConstants'),
    {AsyncStorage, NativeModules} = require('react-native'),
    {EventEmitter} = require('events'),
    _ = require('lodash'),
    Parse = require('parse').Parse;

var CHANGE_EVENT = 'change';

var _user = {
  firstPass: true,
};

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
    case RegistrationConstants.ActionTypes.CHECK_USER_ID:
      handleCheckUserId(action.userId);
      UserStore.emitChange();
      break;
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

function handleCheckUserId(id){
  var UsersData,
      query;
  
  initParse();

  UsersData = Parse.Object.extend("Users");
  query = new Parse.Query(UsersData);
  query.equalTo("account_id", id);

  query.find({
    success: function(users) {
      if(users.length >= 1){
        isRegistered(true);
      } else {
        isRegistered(false);
      }
    },
    error: function(data){
      console.log('ERROR: ', data);
    }
  });
}

function handleCreateAccount(id){
  _user.id = id;
}

function handleSubmitName(name){
  _user.name = name;
}

function handleClearUser(){
  var UsersData,
      NewUser;

  initParse();

  UsersData = Parse.Object.extend("Users");

  NewUser = new UsersData();
  NewUser.set("Name", _user.name); 
  NewUser.set("account_id", _user.id);
  NewUser.save();

  _user = {
    firstPass: true,
  };
}

//UTILS
function isRegistered(bool){
  _user.isRegistered = bool;
  _user.firstPass = false;
}

function initParse(){
  Parse.initialize("XR6QEwB3uUOhxCCT1jGigHQc9YO1vQHceRjrwAgN", "oGY2hPgTLoJJACeuV3CJTihOMDlmE04UCUqq0ABb");
}

module.exports = UserStore;
