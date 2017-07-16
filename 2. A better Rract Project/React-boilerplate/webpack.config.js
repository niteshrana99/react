module.exports = {
    entry: './app/app.jsx', //this is entry file. 
    output: {
        path: __dirname,
        filename:'./public/bundle.js'
    },
    resolve: {
        root:__dirname,
        alias:{
        },
        extensions: ['','.js','.jsx']
    },
    module: {
        loaders: [
            {
                loader:'babel-loader', //Prestes tell babel-loader what to do. In this case we are telling it to compile our code for react and es2015. 
                query: {
                    presets: ['react','es2015','stage-0']
                },
                test: /\.jsx?$/, //Which files we want to apply this loader to.
                exclude: /(node_modules | bower_components)/
            }
        ]
    }
}