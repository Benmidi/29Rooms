'use strict';

var AppConstants = require('../constants/AppConstants'),
    UserStore = require('../stores/UserStore'),
    QuestionStore = require('../stores/QuestionStore'),
    Scan = require('../components/Scan'),
    Question = require('../components/Question'),
    React = require('react-native'),
    _ = require('lodash');

var {
  Navigator,
  View,
  StyleSheet,
} = React;

var App = React.createClass({
  getInitialState: function() {
    return {
      user: null,
      question: 'How are you?',
    };
  },

  componentDidMount: function() {
    QuestionStore.addChangeListener(this._onChange);
    UserStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    QuestionStore.removeChangeListener(this._onChange);
    UserStore.removeChangeListener(this._onChange);
  },

  handleEndpoint: function(response) {
    if (response.indexOf('error') !== -1) {
      this.setState({apiError: true});
    } else {
      this.fetchData(response);
    }
  },

  fetchData: function(req) {
    fetch(req)
    .then((response) => response.json())
    .then((responseData) => {
      HoroscopesActions.receiveRawData(responseData.result);
      this.setState({
        loaded: true,
      });
      if (this.state.mySign) {
        this.skipToGrid();
      }
    })
    .done();
  },

  _onChange: function() {
    this.setState({user: UserStore.get()});
  },

  render: function() {
    return(
      <View>
        <Scan {...this.state} {...this.props} />
      </View>
    );
  }
});

module.exports = App;

