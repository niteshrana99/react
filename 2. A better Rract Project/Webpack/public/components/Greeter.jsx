var React = require('react');

var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
    getDefaultProps:function(){
        return {
            name: 'React', //for default data if data is not provided.
            message: 'This is my Default Message'
        }
    },
    handleNewName: function(name,message){
        this.setState({
            name:name, //now we need to pass this function to greeter form.  
            message:message
        })
    },
    getInitialState: function(){
        return {
            name:this.props.name,
            message:this.props.message
        }
    },
    render: function() {
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
            <GreeterMessage name={name} message={message}/>
            <GreeterForm onNewName={this.handleNewName} />
            </div>
        );
    }
})

module.exports = Greeter;