var Greeter = React.createClass({
    getDefaultProps:function(){
        return {
            name: 'React', //for defauld data if data is not provided.
            message: 'Default Message'
        }
    },
    onButtonClick: function(e){
        e.preventDefault(); //prevent app from refresh.
        var nameRef = this.refs.name;
        var name = nameRef.value;
        nameRef.value='';
        if(typeof name ==='String' && name.length > 0) {
        this.setState({
            name:name
        })
        }
    },
    getInitialState: function(){
        return {
            name:this.props.name
        }
    },
    render: function() {
        var name = this.state.name;
        var message = this.props.message;
        return (
            <div>
            <h1>Hello {name}</h1>
            <p>{message + '!!'}</p>
            <form onSubmit={this.onButtonClick}> 
            <input type="text" ref="name" />
            <button>Set Name</button>
            </form>
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