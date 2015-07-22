import React from 'react';

var HelloWorld = React.createClass({
  render: function () {
    console.log(this.props);
    return (
      <div>
      <h1 onClick={this.props.onClick}>Hello World</h1>
      {this.props.user.assets.map(function(d){
        return <image key={d._name} src={d._url} />;
      })}
      </div>
    );
  }
});

export default HelloWorld;
