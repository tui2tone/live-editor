var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var FriendlyErrors = require('friendly-errors-webpack-plugin')
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var path = require('path');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  plugins: [
 		new webpack.ExternalsPlugin('commonjs', [
        'electron'
    ]),
    new webpack.DefinePlugin({
      'process.env.API_URL': '"http://localhost:7777"'
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets' }
    ]),
    new FriendlyErrors()
  ]
});