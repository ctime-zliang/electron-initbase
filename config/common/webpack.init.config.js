const webpackPaths = require('./webpack.paths')
const webpackRules = require('./webpack.rules')
const webpackPlugins = require('./webpack.plugins')
const webpackOptimization = require('./webpack.optimization')
const webpackStats = require('./webpack.stats')
const webpackExternals = require('./webpack.externals')

const webpackConfigBase = {
	name: `main`,
	target: `node`,
	cache: {
		type: `filesystem`,
	},
	module: {
		rules: webpackRules,
	},
	resolve: webpackPaths.resolve,
	plugins: [...webpackPlugins.common()],
	optimization: webpackOptimization,
	performance: {
		hints: `warning`,
	},
	stats: webpackStats,
	externals: webpackExternals,
}

module.exports = webpackConfigBase
