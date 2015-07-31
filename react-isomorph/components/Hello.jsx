var React = require('react');

var Hello = React.createClass({
    componentDidMount: function() {
        console.log('DID IT! Mounted component!');
    },
    componentWillMount: function() {
        console.log('OMG OMG OMG component will mount in 3 ... 2 ... 1....');
    },
    askForName: function() {
        this.props.name = prompt('What is your name?');
        this.forceUpdate();
    },
    render: function() {
        return (
            <div onClick={this.askForName}>Hallo {this.props.name}</div>
        )
    }
});

module.exports = Hello;