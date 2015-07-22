'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    RegistrationConstants = require('../constants/RegistrationConstants');

var RegistrationActions = {
  checkUserId: function(userId) {
    AppDispatcher.dispatch({
      actionType: RegistrationConstants.ActionTypes.CHECK_USER_ID,
      userId: userId,
    });
  },
  userCreateAccount: function(userId) {
    AppDispatcher.dispatch({
      actionType: RegistrationConstants.ActionTypes.USER_CREATE_ACCOUNT,
      userId: userId,
    });
  },
  saveUser: function(userName) {
    AppDispatcher.dispatch({
      actionType: RegistrationConstants.ActionTypes.SAVE_USER,
      userName: userName,
    });
  },
  clearUser: function(bool) {
    AppDispatcher.dispatch({
      actionType: RegistrationConstants.ActionTypes.CLEAR_USER,
      bool: bool,
    });
  },
};

module.exports = RegistrationActions;