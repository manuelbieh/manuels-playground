var React = require('react');
var Hello = require('./Hello');

React.render(React.createElement(Hello, {name: "Manuel"}), document.getElementById('react-container'));
React.render(React.createElement(Hello, {name: "Manuel"}), document.getElementById('react-container2'));
