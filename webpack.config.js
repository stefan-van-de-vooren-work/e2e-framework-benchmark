

// https://agitated-hoover-cdafcd.netlify.com/
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const VENDOR_LIBS = ['react', 'react-dom'];

module.exports = {
	entry: {
		bundle: './app/src/index.jsx',
		vendor: VENDOR_LIBS
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].[chunkhash].bundle.js',
		chunkFilename: '[name].[chunkhash].bundle.js'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					chunks: 'initial',
					name: 'vendor',
					test: 'vendor',
					enforce: true
				},
			}
		},
		runtimeChunk: true
	},
	module: {
		rules: [
			{
				test: [/\.js$/, /\.jsx$/],
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader'
				}
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './app/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	]
}