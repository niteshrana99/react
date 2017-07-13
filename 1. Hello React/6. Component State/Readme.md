There is two types of data in component. 
1. Props:props get passed into component as we initialise it.  
2. state:state is internally maintained and updated by component. So props can't be edited. 

We are going to use predefined method of react called getInitialState. This will return object. Since props cannot update , so we are going to use state to let the user update it. So by getinitial state function we are saying that okay, use the props value but we are going to update it. So in render function we change name to this.state.name from this.props.name.

Now setting a state is complicated. It requires us to call a function and can't be done simply. So we need to call setState. 
setState function will do two things:
1. it will set a new value for name.
2. we can re-render our component. 
so we call this.setState.