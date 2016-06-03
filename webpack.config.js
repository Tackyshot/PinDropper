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
      textfield: `${__dirname}/client/components/_common/textField/`,
      theme: `${__dirname}/client/components/_common/_theme/`,
      corkboard: `${__dirname}/client/components/_common/corkboard/`,
      style: './style/',
      models: `${__dirname}/server/assets/models`,
      data: `${__dirname}/server/assets/data`
    },
    extensions: ["", ".webpack.js", ".web.js", ".js", '.jsx']
  },
  module:{
    loaders: [
      {
        test: /(\.jsx$|\.js$)/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel']
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