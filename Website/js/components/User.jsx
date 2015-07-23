import React from 'react';

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
    var self = this;
    console.log("in user render");
    console.log(this.props);

    if(this.props.user.assets.length > 0) {
      var component = (
        <div>
          <h1>
            User ID: {this.props.user.id} 
          </h1>
          {this.props.user.assets.map(function(d){
            console.log("D", d.attributes);
            if (self.parseAssetType(d.attributes.asset._url) === 'video') {
              return <li><h3>CHECKPOINT {d.attributes.checkpoint}</h3><video src={d.attributes.asset._url} controls></video></li>;
            } else if (self.parseAssetType(d.attributes.asset._url) === 'image') {
              return <li><h3>CHECKPOINT {d.attributes.checkpoint}</h3><img src={d.attributes.asset._url}/></li>;
            } else {
              return <li><h3>CHECKPOINT {d.attributes.checkpoint}</h3><h3>Unsupported File Type</h3></li>;
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
