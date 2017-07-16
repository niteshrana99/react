var React = require('react');
var GreeterForm =React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        var name = this.refs.name.value;
        var message = this.refs.msg.value;
        // console.log(name)
        if(name.length > 0 && typeof name ==='string'){
            this.refs.name.value = '';
            this.refs.msg.value = '';
            //Now the name We have set up we want to send it to Greeter component. We will do it by using props.
            this.props.onNewName(name,message);
        }
    },
    render:function() {
        return (
            <div>
            <form onSubmit={this.onFormSubmit}> 
            <input type="text" ref="name" />
            <div><textarea rows="4" cols="20" ref="msg"></textarea></div>
            <button>Set Name</button>
            </form>
            </div>
        );
    }
})

module.exports = GreeterForm;