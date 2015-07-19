var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;


APP = require('./components/app').APP;

var Logout = require('./components/auth/app-logout');
var Login = require('./components/auth/app-login');

var About = require('./components/about/app-about');
var Dashboard = require('./components/dashboard/app-dashboard');
var Homepage = require('./components/homepage/homepage');


var routes = (
  <Route handler={APP}>
    <Route name="login" handler={Login}/>
    <Route name="logout" handler={Logout}/>
    <Route name="about" handler={About}/>
    <Route name="dashboard" handler={Dashboard}/>
    <Route name="home" handler={Homepage}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('example'));
});
