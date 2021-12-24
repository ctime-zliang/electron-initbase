const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { ESBuildPlugin } = require('esbuild-loader')

module.exports = {
	common: [new ESBuildPlugin(), new webpack.ProgressPlugin()],
	devBuild: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: './src/static',
					to: './static',
				},
			],
		}),
		// new webpack.HotModuleReplacementPlugin(),
	],
	prodBuild: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
		}),
		new BundleAnalyzerPlugin({
			analyzerPort: 0,
		}),
	],
}
