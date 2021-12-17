const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')
const paths = require('./webpack.paths')
const plugins = require('./webpack.plugins')
const devServerConfig = require('./webpack.dev-server.config')

const webpackDevConfig = {
	mode: 'development',
	output: {
		publicPath: paths.devBuild.publicPath,
		path: paths.devBuild.path(),
		filename: paths.output.filename,
		chunkFilename: paths.output.chunkFilename,
	},
	plugins: [...plugins.devBuild],
	devtool: 'source-map',
	devServer: devServerConfig,
}

module.exports = merge(webpackBaseConfig, webpackDevConfig)
