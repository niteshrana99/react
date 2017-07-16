//We should reqire dependencies that our file needs. Since we have removed it from index.
var React = require('react');
var ReactDOM = require('react-dom');


//var Greeter = require('./components/Greeter');
var Greeter = require('Greeter'); //Now we can use filename directly as we have set it in webpack custom package names.

ReactDOM.render(
    <Greeter/>,
    document.getElementById('example')
)