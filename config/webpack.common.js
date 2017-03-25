var webpack = require('webpack');
var helpers = require('./helpers');
var DashboardPlugin = require('webpack-dashboard/plugin');
var path = require('path')

module.exports = {
	entry: {
		'app': './src/app.js'
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	},

	module: {
		rules: [
			{
		    test: /\.vue$/,
		    loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					babelrc: false,
					presets: ["es2015", "stage-0"],
					plugins: [
						"transform-runtime",
						["module-alias", [
								{ "src": "./src/stores",             "expose": "stores"       },
								{ "src": "./src/containers",         "expose": "containers"   },
								{ "src": "./src/components",         "expose": "components"   },
								{ "src": "./src/utils",              "expose": "utils"        },
								{ "src": "./src/constants",          "expose": "constants"    }
						]]
					]
				}
			},
			{
				test: /\.html$/,
				loader: 'html'
			},
			{
				test: /\.(png|jpe?g|gif)(\?[\s\S]+)?$/,
				loader: 'url?limit=10000&name=./images/[hash].[ext]'
			},
			{
				test: /\.(woff|woff2|ttf|eot|ico|svg)(\?[\s\S]+)?$/,
				loader: 'url?limit=10000&name=./fonts/[name]-[hash].[ext]'
			},
			{
				test: /\.sass$/,
				use: [
					{ loader: 'raw-loader' },
					{ loader: 'sass-loader' }
				]
			}
		]
	}
};