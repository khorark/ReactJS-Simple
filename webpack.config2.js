/**
 * Created by arkadiy on 30.10.16.
 */
"use strict";

const NODE_ENV = process.env.NODE_ENV || 'develop';
const webpack = require('webpack');

module.exports = {
    entry: {
        script: ['./static/app.jsx']
    },
    output: {
        filename: '[name].js',
        path: './static/build2/',
        library: '[name]'
    },
    watch: NODE_ENV == 'develop',

    devtool: NODE_ENV == 'develop' ? '#cheap-module-source-map' : null,

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG: JSON.stringify('ru')
        })
    ],

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions:         ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions:      ['', '.js']
    },

    module: {

        loaders: [{
            test: [/\.js$/, /\.jsx$/],
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'stage-0', 'stage-1']
            }
        }]

    }

};

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}