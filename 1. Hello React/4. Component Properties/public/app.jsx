var Greeter = React.createClass({
    getDefaultProps:function(){
        return {
            name: 'React', //for defauld data if data is not provided.
            message: 'Default Message'
        }
    },
    render: function() {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
            <h1>Hello {name}</h1>
            <p>{message + '!!'}</p>
            </div>
        );
    }
})

var firstName = 'Nitesh';
var msg = 'This comes from component';
ReactDOM.render(
    <Greeter name={firstName} message={msg}/>,
    document.getElementById('example')
)