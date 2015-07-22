'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    RegistrationConstants = require('../constants/RegistrationConstants');

var RegistrationActions = {
  checkUserId: function(userId){
    AppDispatcher.dispatch({
      actionType: RegistrationConstants.ActionTypes.CHECK_USER_ID,
      userId: userId,
    });
  },
  userCreateAccount: function(userId){
    AppDispatcher.dispatch({
      actionType: RegistrationConstants.ActionTypes.USER_CREATE_ACCOUNT,
      userId: userId,
    });
  },
  userSubmitName: function(userName){
    AppDispatcher.dispatch({
      actionType: RegistrationConstants.ActionTypes.USER_SUBMIT_NAME,
      userName: userName,
    });
  },
  clearUser: function(){
    AppDispatcher.dispatch({
      actionType: RegistrationConstants.ActionTypes.CLEAR_USER
    });
  },
};

module.exports = RegistrationActions;