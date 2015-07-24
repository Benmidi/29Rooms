/**
 * 29Rooms Video App
 * Emily O'Brien
 * https://github.com/Emibob
 */
'use strict';

var React = require('react-native'),
    _ = require('lodash'),
    App = require('./js/components/App');

var {
  AppRegistry,
  Navigator,
} = React;

var Video = React.createClass({
  render: function() {
    return (
      <Navigator
          initialRoute={{
            title: 'App',
            component: App,
          }}

          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromBottom;
          }}

          renderScene={(route, navigator) => {
            if (route.component) {
              return React.createElement(route.component, { navigator: _.omit(navigator, 'route'), ...route });
            }
          }}

          onItemRef={(ref, index, route) => {
            route.sceneRef = ref;
          }}

          onDidFocus={(route) => {
            if(route.sceneRef.componentDidFocus) {
              route.sceneRef.componentDidFocus();
            }
          }}
      />
    );
  }
});

AppRegistry.registerComponent('Video', () => Video);

