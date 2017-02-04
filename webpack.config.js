var webpack = require('webpack');
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "client/dist");
var SRC_DIR = path.resolve(__dirname, "client/src");

var config = {
    entry: SRC_DIR + '/index.jsx',
    module: {
      loaders: [
        {
          test: /\.jsx?/,
          include: SRC_DIR,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react'],
            plugins: ['transform-decorators-legacy', 'transform-object-rest-spread']
          }
        }
      ]
    },
    output: {
      path: DIST_DIR,
      filename: 'bundle.js'
    }
};

module.exports = config;