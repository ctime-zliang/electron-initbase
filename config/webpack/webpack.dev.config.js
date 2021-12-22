const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')
const webpackPaths = require('./webpack.paths')
const webpackPlugins = require('./webpack.plugins')

const webpackDevConfig = {
	mode: 'development',
	output: {
		publicPath: webpackPaths.devBuild.publicPath,
		path: webpackPaths.devBuild.path(),
		filename: webpackPaths.output.filename,
		chunkFilename: webpackPaths.output.chunkFilename,
	},
	plugins: [...webpackPlugins.devBuild],
	devtool: 'source-map',
}

module.exports = merge(webpackBaseConfig, webpackDevConfig)
