var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: [
            "./src/app"
        ],
        vendor: ['react', 'react-dom']
    },
    output: {
        filename: '[name].js'
    },
    plugins: [
    ],
    module: {
        loaders: [
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