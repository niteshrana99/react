var GreeterMessage = React.createClass({
   
    render : function() {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
            <h1>Hello {name}</h1>
            <p>{message} !!</p>
            </div>
        );
    }
})
var GreeterForm =React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        var name = this.refs.name.value;
        // console.log(name)
        if(name.length > 0 && typeof name ==='string'){
            this.refs.name.value='';
            //Now the name We have set up we want to send it to Greeter component. We will do it by using props.
            this.props.onNewName(name);
        }
    },
    render:function() {
        return (
            <div>
            <form onSubmit={this.onFormSubmit}> 
            <input type="text" ref="name" />
            <button>Set Name</button>
            </form>
            </div>
        );
    }
})
var Greeter = React.createClass({
    getDefaultProps:function(){
        return {
            name: 'React', //for defauld data if data is not provided.
            message: 'This is my Default Message'
        }
    },
    handleNewName: function(name){
        this.setState({
            name:name //now we need to pass this function to greeter form.  
        })
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
            <GreeterMessage name={name} message={message}/>
            <GreeterForm onNewName={this.handleNewName} />
            </div>
        );
    }
})

ReactDOM.render(
    <Greeter/>,
    document.getElementById('example')
)