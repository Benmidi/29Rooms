'use strict';

describe('WebsiteApp', () => {
  let React = require('react/addons');
  let WebsiteApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    WebsiteApp = require('components/WebsiteApp.js');
    component = React.createElement(WebsiteApp);
  });

  it('should create a new instance of WebsiteApp', () => {
    expect(component).toBeDefined();
  });
});
