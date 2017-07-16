module.exports = {
    entry: './public/app.jsx', //this is entry file. 
    output: {
        path: __dirname,
        filename:'./public/bundle.js'
    },
    resolve: {
        root:__dirname,
        alias:{
            GreeterMessage : 'public/components/GreeterMessage.jsx',
            GreeterForm : 'public/components/GreeterForm.jsx',
            Greeter:'public/components/Greeter.jsx'
        },
        extensions: ['','.js','.jsx']
    },
    module: {
        loaders: [
            {
                loader:'babel-loader', //Prestes tell babel-loader what to do. In this case we are telling it to compile our code for react and es2015. 
                query: {
                    presets: ['react','es2015']
                },
                test: /\.jsx?$/, //Which files we want to apply this loader to.
                exclude: /(node_modules | bower_components)/
            }
        ]
    }
}