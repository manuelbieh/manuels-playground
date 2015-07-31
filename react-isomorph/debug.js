var serveStatic = require('serve-static');

var React = require('react');

var Hello = React.createFactory(require('./components/Hello'));

var reactApp = React.renderToString(Hello({
    name: "Welt"
}));

console.log(reactApp);