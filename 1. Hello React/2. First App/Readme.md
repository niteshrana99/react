We are including three script files in our app folder:
1. babel-core: for transpiling es6 to es5 or converting jsx.
2. react library.
3. react-dom

React and react-dom are both required if we are using react on the web. but the reason they are seperate as they are used in other invironments like android. 

You should include only 5.8.23 vesion of babel-core as other versions don't support the inclusion of file this way.  

ReactDom.render will be called as function. The first argument is gonna be peice of JSX(JS XML), and second is gonna be our html class element or id.