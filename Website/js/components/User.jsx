import React from 'react';

var User = React.createClass({
  render: function () {
    console.log("in user render");
    console.log(this.props);

    if(this.props.user.assets.length > 0) {
      var component = (
        <div>
          <h1>
            User ID: {this.props.user.id} 
          </h1>
          {this.props.user.assets.map(function(d){
            return <li><h3>CHECKPOINT {d.attributes.checkpoint}</h3><img src={d.attributes.asset._url} /></li>;
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
