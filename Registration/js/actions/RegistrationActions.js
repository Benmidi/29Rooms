'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    RegistrationConstants = require('../constants/RegistrationConstants');

var RegistrationActions = {
  receiveRawData: function(data) {
    AppDispatcher.dispatch({
      actionType: RegistrationConstants.ActionTypes.RECEIVED_RAW_DATA,
      data: data,
    });
  },
  userCreateAccount: function(userId){
    AppDispatcher.dispatch({
      actionType: RegistrationConstants.ActionTypes.USER_CREATE_ACCOUNT,
      userId: userId,
    });
  }
};

module.exports = RegistrationActions;