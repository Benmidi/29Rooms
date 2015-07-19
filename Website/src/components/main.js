'use strict';

var WebsiteApp = require('./WebsiteApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={WebsiteApp}>
    <Route name="/" handler={WebsiteApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
