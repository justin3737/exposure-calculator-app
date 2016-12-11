var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.base.config.js');

config.entry.app.unshift(
     "webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr"
);

config.output.path =  __dirname;
config.output.publicPath = 'http://localhost:3000/assets/';
config.devtool = 'cheap-module-eval-source-map';

config.plugins.push(
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
);

config.module.loaders.push(
    {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
    },
    { 
        test: /\.scss$/, 
        loader: "style!css!sass?outputStyle=expanded&includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib")
    }
);

module.exports = config;
