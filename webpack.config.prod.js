var path = require('path');
var webpack = require('webpack');
var ExtractText = require ('extract-text-webpack-plugin');
var config = require('./webpack.base.config.js');

config.output.path = __dirname + '/dist/assets/';
config.output.publicPath = '';

config.plugins.push(
    new ExtractText('[name].css'),
    new webpack.optimize.UglifyJsPlugin()
);

config.module.loaders.push(
    {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
    },
    {
        test   : /.scss$/,
        loader : ExtractText.extract(
            'style-loader', 
            'css-loader!sass-loader?includePaths[]=' 
            + path.resolve(__dirname, './node_modules/compass-mixins/lib')
        )
    }
);

module.exports = config;
