'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppConstants = require('../constants/AppConstants'),
    {EventEmitter} = require('events'),
    _ = require('lodash'),
    Parse = require('parse').Parse;

var CHANGE_EVENT = 'change';

var _user = { assets: [], loading: true};

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
    case AppConstants.ActionTypes.FETCH_USER_ASSETS:
      handleFetchUserAssets();
      UserStore.emitChange();
      break;

    default:
      // no op
  }
});

function handleFetchUserAssets(){
  var gifList,
      query;
  
  initParse();

  _.extend(_user, {loading: true});

  gifList = Parse.Object.extend("Assets");
  query = new Parse.Query(gifList);
  query.equalTo("account_id", document.location.pathname.split('/').pop());

  query.find({
    success: function(results) {
      var assets = [];
      console.log("Successfully retrieved ", results.length, " images.");
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        console.log(object.id, ' - ', object.get('asset'));
        assets.push(object.get('asset'));
      }
      _.extend(_user, {assets: assets, loading: false});
      UserStore.emitChange();
    },
    error: function(error) {
      console.log("Error: ", error.code, " " + error.message);
      _.extend(_user, {error: "could not find assets", loading: false});
      UserStore.emitChange();
    }
  });
}

//UTILS

function initParse() {
  Parse.initialize("XR6QEwB3uUOhxCCT1jGigHQc9YO1vQHceRjrwAgN", "oGY2hPgTLoJJACeuV3CJTihOMDlmE04UCUqq0ABb");
}

function parsePathname() {

}

module.exports = UserStore;
