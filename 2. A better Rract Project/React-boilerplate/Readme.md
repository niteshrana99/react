We are going to remove all our greeter functionality and create a boilerplate that we can use with any project.

Some experimental es6 features are not supported by babel loader such as ...spread in objects. So to include these we need to install stage 0 preset.
npm install babel-preset-stage-0