var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map', 
    entry: {
        app: [
            "webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr",
            "./src/app"
        ],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: __dirname,
        filename: '[name].js',
        publicPath: 'http://localhost:3000/assets/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: path.join(__dirname, 'src')
            },
            { 
                test: /\.scss$/, 
                loader: "style!css!sass?outputStyle=expanded&includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib")
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                loader: 'url?limit=8192'
            }
        ]
    },
    resolve: {
        modulesDirectories: [
            'src',
            'node_modules'
        ],
        extensions: ['', '.js', '.jsx', '.css', '.scss', '.sass']
    }
};