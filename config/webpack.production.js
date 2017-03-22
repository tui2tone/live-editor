var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var extractCSS = new ExtractTextPlugin("style.css")

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist/assets'),
    publicPath: "/assets/",
    filename: '[name].js'
  },

	vue: {
		loaders: {
			js: 'babel',
			sass: extractCSS.extract("vue-style!css!sass"),
			scss: extractCSS.extract("vue-style!css!sass")
		},
		postcss: [
			require('autoprefixer')({
				browsers: ['last 2 versions']
			})
		]
	},

	plugins: [
		new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      'process.env.API_URL': '"http://mock.nextzy.me"'
    }),
		new ExtractTextPlugin("style.css"),
		new HtmlWebpackPlugin({
			template: 'src/assets/index.html'
		}),
		new CopyWebpackPlugin([
			{ from: 'src/assets' }
		])
	]
});