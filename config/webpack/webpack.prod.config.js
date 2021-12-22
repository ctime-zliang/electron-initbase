const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack-client.base.config')
const webpackPaths = require('./webpack.paths')
const webpackPlugins = require('./webpack.plugins')

const webpackProdConfig = {
	mode: 'production',
	output: {
		publicPath: webpackPaths.prodBuild.publicPath,
		path: webpackPaths.prodBuild.path(),
		filename: webpackPaths.output.filename,
		chunkFilename: webpackPaths.output.chunkFilename,
	},
	plugins: [...webpackPlugins.prodBuild],
}

module.exports = merge(webpackBaseConfig, webpackProdConfig)
