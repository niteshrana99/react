We will improve the previous project by changing the directory structure and using webpack: Why we need to do this::

1. We are using script tags inside index.html. If we want to deploy code to production it will be best to manage third party dependencies through npm. It is also going to decrease the requests we are making for js files. 

2. In index file we use script for babel and app.jsx. Inside of app.jsx code we use jsx code as well as es6. Now here we convert this whole code into JS, this can be time consuming and expensive. Ideally we would have all the code converted before the server starts. 

3. The last problem is in app.jsx. Right now we have all our components in one file, as well code that initialises our app (ReactDOM.render.). But when we introduce testing it is going to be difficult. 

To fix these we are going to use webpack.  Webpack is gonna let us bundle all the third party dependencies as well has our jsx file. 

Installing Webpack: 
npm install -g webpack@1.12.13
npm install --save react@0.14.7 react-dom@0.14.7
npm install --save-dev webpack@1.12.13 babel-core@6.5.1 babel-loader@6.2.2 babel-preset-es2015@6.5.0 babel-preset-react@6.5.0

Webpack Config File:::
In config file we can pass plugins etc. 
babel-loader to convert jsx file into es5 code.

Webpack Custom package Names:::
Now for the time being in require we have to specify the whole path of jsx file or module. We can achieve that by doing some changes in resolve in webpack.config file. in resoleve we use dirname which points to root of the project and then we use alias for our filnames and use our filenames directly.

webpack -w will look for changes and bundle it without restarting it agagin and again.