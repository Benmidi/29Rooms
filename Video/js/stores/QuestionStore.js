'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppConstants = require('../constants/AppConstants'),
    {EventEmitter} = require('events'),
    _ = require('lodash');

var CHANGE_EVENT = 'change';

var _question = '';

/**
 * handleUpdateSign()
 * @param  {string} sign
 */
function handleSetQuestion(question) {
  console.log('question received: ', question);
}

var QuestionStore = _.extend({}, EventEmitter.prototype, {
  /**
   * Get the user
   * @return {obj}
   */
  get: function() {
    return _question;
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
    case AppConstants.ActionTypes.SET_QUESTION:
      handleSetQuestion(action.question);
      QuestionStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = QuestionStore;


