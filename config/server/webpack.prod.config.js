const { merge } = require('webpack-merge')
const webpackInitConfig = require('../common/webpack.init.config')
const webpackPlugins = require('../common/webpack.plugins')
const webpackPaths = require('./webpack.paths')

const webpackProdConfig = {
	mode: 'production',
	entry: {
		main: webpackPaths.entry.main,
	},
	output: {
		publicPath: webpackPaths.prodBuild.publicPath,
		path: webpackPaths.prodBuild.path(),
		filename: webpackPaths.output.filename,
		chunkFilename: webpackPaths.output.chunkFilename,
	},
	plugins: webpackPlugins.prodBuild,
}

module.exports = merge(webpackInitConfig, webpackProdConfig)
