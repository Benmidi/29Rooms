import React from 'react';
var StyleSheet = require('react-style');


var styles = StyleSheet.create({
  secondaryMessage: {
    fontSize: 30,
    color: '#363380',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  welcomeMessage: {
    color: 'violet',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "helvetica",
    textAlign: 'center',
    fontSize: 80,
  }
});

var HomePage = React.createClass({
  render: function () {
       return(
      <div>
        <h1 style={styles.welcomeMessage}>
          Welcome to 29Rooms!
        </h1>
        <h2 style={styles.secondaryMessage}>
        Please visit 29Rooms.com&#47;&#42;yourUserId&#42; to get started!
        </h2>
      </div>
    )
  }
});

export default HomePage;
