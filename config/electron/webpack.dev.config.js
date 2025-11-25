const { merge } = require('webpack-merge')
const webpackInitConfig = require('../common/webpack.init.config')
const webpackPlugins = require('../common/webpack.plugins')
const webpackPluginsLocal = require('./webpack.plugins')
const webpackPaths = require('./webpack.paths')

const webpackDevConfig = {
	mode: 'development',
	entry: {
		main: webpackPaths.entry.main,
	},
	output: {
		publicPath: webpackPaths.devBuild.publicPath,
		path: webpackPaths.devBuild.path(),
		filename: webpackPaths.output.filename,
		chunkFilename: webpackPaths.output.chunkFilename,
	},
	plugins: [...webpackPluginsLocal.common(), ...webpackPlugins.devBuild()],
	devtool: 'source-map',
}

module.exports = merge(webpackInitConfig, webpackDevConfig)
