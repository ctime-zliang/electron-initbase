const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack-client.base.config')
const paths = require('./webpack.paths')
const plugins = require('./webpack.plugins')

const webpackProdConfig = {
	mode: 'production',
	output: {
		publicPath: paths.prodBuild.publicPath,
		path: paths.prodBuild.path(),
		filename: paths.output.filename,
		chunkFilename: paths.output.chunkFilename,
	},
	plugins: [...plugins.prodBuild],
}

module.exports = merge(webpackBaseConfig, webpackProdConfig)
