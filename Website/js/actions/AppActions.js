'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppConstants = require('../constants/AppConstants');

var AppActions = {
  fetchUserAssets: function(userId){
    AppDispatcher.dispatch({
      actionType: AppConstants.ActionTypes.FETCH_USER_ASSETS,
    });
  },
  fetchUserName: function(userId){
    AppDispatcher.dispatch({
      actionType: AppConstants.ActionTypes.FETCH_USER_NAME,
    });
  },
};

module.exports = AppActions;
