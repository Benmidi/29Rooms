'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppConstants = require('../constants/AppConstants');

var AppActions = {
  fetchUserAssets: function(userId){
    AppDispatcher.dispatch({
      actionType: AppConstants.ActionTypes.FETCH_USER_ASSETS,
    });
  },
};

module.exports = AppActions;
