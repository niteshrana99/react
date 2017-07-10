Properties is a way of passing data through your component. Example we will pass name into our app. 
First we need to add prop to our greeter component, it is similar to adding new attribute. Once we pass prop it is gonna be available to us in our component. 

Now we pull it out from render using this.props object which stores all the props. After we pull it out in local variable the last thing to do is to show it on screen. For that we are going to use JS expression feature of JSX which is {}.

Now if i don't pass anything , then it should show something by default. We use react default method known as getDefautProps. This method returns an object containing all the default properties. Now if we don't specify the name property, the default will be rendered otherwise the passed value will be rendered.

We can pass other types into props. So let us have a variable firstname. ANd in props we insert JS expression,