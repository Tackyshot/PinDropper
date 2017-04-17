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
      common: `${__dirname}/client/components/_common`,
      tools: `${__dirname}/client/_tools`,
      theme: `${__dirname}/client/components/_common/_theme/theme.jsx`,
      style: './style/style.js',
      actions: `${__dirname}/client/actions`,
      stores: `${__dirname}/client/stores`,
      svg: `${__dirname}/client/components/_common/svg`,
      inputs: `${__dirname}/client/components/_common/inputs/inputs.jsx`,
      corkboard: `${__dirname}/client/components/_common/corkboard/`
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