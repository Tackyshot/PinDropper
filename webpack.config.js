"use strict";
const webpack = require('webpack');
const path    = require('path');

let webpackConfig = {
  entry: "./client/app.jsx",
  output: {
    path:path.resolve(__dirname, 'server/services/http/content/js/'),
    filename: "bundle.js"
  },
  resolve:{
    modules:[
      "node_modules",
      path.join(__dirname, 'client')
    ],
    alias:{
      actions: `${__dirname}/client/actions`,
      stores: `${__dirname}/client/stores`,
      tools: `${__dirname}/client/`,
      common: `${__dirname}/client/components/_common`,
      textfield: `${__dirname}/client/components/_common/textField/`,
      theme: `${__dirname}/client/components/_common/_theme/theme.jsx`,
      corkboard: `${__dirname}/client/components/_common/corkboard/`,
      style: './css/style.js'
    },
    extensions: [".webpack.js", ".web.js", ".js", '.jsx']
  },
  module:{
    rules: [
      {
        test: /(\.jsx$|\.js$)/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },

  context: __dirname,
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ]
};

module.exports = webpackConfig;