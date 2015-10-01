var React = require('react');

var Hello = React.createClass({displayName: "Hello",

    componentDidMount: function() {
        console.log('DID IT! Mounted component!');
    },

    componentWillMount: function() {
        console.log('Component will mount in 3 ... 2 ... 1....');
    },

    askForName: function() {
        this.props.name = prompt('What is your name?');
        this.forceUpdate();
    },

    render: function() {
        return (
            React.createElement("div", {onClick: this.askForName}, "Hallo ", this.props.name)
        )
    }

});

module.exports = Hello;
