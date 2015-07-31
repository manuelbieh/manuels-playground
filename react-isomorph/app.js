var express = require('express');
var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var serveStatic = require('serve-static');

var React = require('react');

var Hello = React.createFactory(require('./components/Hello'));


var app = express();

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/bower_components', serveStatic('./bower_components'));
app.use('/components', serveStatic('./components'));



app.get('/', function(req, res) {

    var reactApp = React.renderToString(Hello({
        name: "Welt"
    }));

    var reactApp2 = React.renderToString(Hello({
        name: "World"
    }));

    res.render('test', {
        reactApp: reactApp,
        reactApp2: reactApp2,
    });


});


var server = app.listen(3333);


