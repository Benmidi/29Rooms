import React from 'react';

var User = React.createClass({
  render: function () {
    console.log("in user render");
    console.log(this.props);
    return (
      <div>
      <h1>User ID: {this.props.user.id} </h1>

      {this.props.user.assets.map(function(d){
        return <li><h3>CHECKPOINT {d.attributes.checkpoint}</h3><img src={d.attributes.asset._url} /></li>;
      })}
      </div>
    );
  }
});

export default User;
