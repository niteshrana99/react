ref attribute in input field is react attribute which we can use to give a name to element. Since we want to access this input field so we can get it's value by using ref. Then on form we use built-in attribute onSubmit to call a function. onSubmit expects a function to be passed to it. 

Then we create a function and alert the value. We get the value from this.refs.name.value