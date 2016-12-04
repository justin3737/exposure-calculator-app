var path = require('path');
var webpack = require('webpack');
var ExtractText = require ('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map', 
    entry: {
        app: [
            "./src/app"
        ],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: __dirname + '/static',
        filename: '[name].js',
        publicPath: '../static/'
    },
    plugins: [
        new ExtractText('[name].css'),
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
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