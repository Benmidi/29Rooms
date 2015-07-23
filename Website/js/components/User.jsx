import React from 'react';
var StyleSheet = require('react-style');

var styles = StyleSheet.create({
  checkpoint: {
    fontSize: 30,
    color: '#363380',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  identifier: {
    color: 'violet',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "helvetica",
    textAlign: 'center',
    fontSize: 40,
  },
  listStyle: {
   textAlign: 'center',
   alignSelf: 'center',
  },
  asset: {
    maxWidth: 350,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  }
});

var User = React.createClass({
  parseAssetType: function(assetString) {
    var fileExtension = assetString.split('.').pop();
    switch (fileExtension) {
      case "MOV":
        return 'video';
        break;
      case "jpg":
      case "png":
      case "gif":
        return 'image';
        break;
      default:
        console.log("unsupported file type", fileExtension);
        return 'unsupported';
    }
  },

  render: function () {
    var self = this,
        identifier;
    console.log("in user render");
    identifier = this.props.user.name? this.props.user.name : ("User " + this.props.user.id);

    if(this.props.user.assets.length > 0) {
      var component = (
        <div>
          <h1 style={styles.identifier}>
            Hey, {identifier}! Check out your videos!
          </h1>
          {this.props.user.assets.map(function(d){
            if (self.parseAssetType(d.attributes.asset._url) === 'video') {
              return <div style={styles.listStyle}><span style={styles.checkpoint}>CHECKPOINT {d.attributes.checkpoint}</span><video src={d.attributes.asset._url} style={styles.asset} controls></video></div>;
            } else if (self.parseAssetType(d.attributes.asset._url) === 'image') {
              return <div style={styles.listStyle}><span style={styles.checkpoint}>CHECKPOINT {d.attributes.checkpoint}</span><img src={d.attributes.asset._url} style={styles.asset}/></div>;
            } else {
              return <div style={styles.listStyle}><span style={styles.checkpoint}>CHECKPOINT {d.attributes.checkpoint}</span><h3>Unsupported File Type</h3></div>;
            }
          })}
        </div>
      )
    } else {
      var component = <h1>There are no videos registered for user {this.props.user.id}. Go make some!</h1>;
    }

    return(
      <div>{component}</div>
    )
  }
});

export default User;
