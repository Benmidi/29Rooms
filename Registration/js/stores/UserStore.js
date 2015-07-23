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
    case RegistrationConstants.ActionTypes.CLEAR_USER:
      handleclearUserAccount(action.bool);
      UserStore.emitChange();
      break;
    case RegistrationConstants.ActionTypes.SAVE_USER:
      handleSaveUser(action.userName);
      UserStore.emitChange();
      break;

    default:
      // no op
  }
});

function handleCheckUserId(id) {
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
        UserStore.emitChange();
      } else {
        isRegistered(false);
        UserStore.emitChange();
      }
    },
    error: function(model, error) {
      if(error.code === Parse.Error.CONNECTION_FAILED){
        _user.errorMessage = 'Connection Error';
        console.log('ERROR in handleCheckUserId: ', error);
        UserStore.emitChange();
      } else {
        _user.errorMessage = 'There was an error checking the DB for your user ID';
        console.log('ERROR in handleCheckUserId: ', error);
        UserStore.emitChange();
      }
    }
  });
}

function handleCreateAccount(id) {
  _user.id = id;
}

function handleSaveUser(name) {
  var UsersData,
      NewUser;

  _user.name = name;

  initParse();

  UsersData = Parse.Object.extend("Users");

  NewUser = new UsersData();
  NewUser.set("Name", _user.name); 
  NewUser.set("account_id", _user.id);
  NewUser.save({
    success: function(data){
      _user.thanks = true;
      UserStore.emitChange();
    },
    error: function(data){
      _user.errorMessage = 'Unable to save your account';
      UserStore.emitChange();
    }
  });
}

function handleclearUserAccount() {
  _user = {
    firstPass: true,
  };
}

function isRegistered(bool) {
  if(bool){
    _user.errorTitle = "Haven't we met before?";
    _user.errorMessage = "This barcode has already been registered. Go to the rooms!";
  }

  _user.isRegistered = bool;
  _user.firstPass = false;
}

function initParse() {
  Parse.initialize("XR6QEwB3uUOhxCCT1jGigHQc9YO1vQHceRjrwAgN", "oGY2hPgTLoJJACeuV3CJTihOMDlmE04UCUqq0ABb");
}

module.exports = UserStore;
