var Greeter = React.createClass({
    render: function() {
        return (
            <div>
            <h1>Hello React</h1>
            <p>This comes from component</p>
            </div>
        );
    }
})

ReactDOM.render(
    <Greeter/>,
    document.getElementById('example')
)