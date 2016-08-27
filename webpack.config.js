"use strict";
const webpack = require('webpack');
const path    = require('path');

let webpackConfig = {
  entry: "./client/app.jsx",
  output: {
    path:path.resolve(__dirname, 'server/assets/client/js/'),
    filename: "bundle.js"
  },
  resolve:{
    alias:{
      actions: `${__dirname}/client/actions`,
      stores: `${__dirname}/client/stores`,
      tools: `${__dirname}/client/tools`,
      _common: `${__dirname}/client/components/_common`,
      textfield: `${__dirname}/client/components/_common/textField/`,
      theme: `${__dirname}/client/components/_common/_theme/`,
      corkboard: `${__dirname}/client/components/_common/corkboard/`,
      style: './style/'
    },
    extensions: ["", ".webpack.js", ".web.js", ".js", '.jsx']
  },
  module:{
    loaders: [
      {
        test: /(\.jsx$|\.js$)/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel'],
        plugins: ['transform-decorators-legacy'],
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ]
};

module.exports = webpackConfig;