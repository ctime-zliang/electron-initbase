const webpackPaths = require('./webpack.paths')
const webpackRules = require('./webpack.rules')
const webpackPlugins = require('./webpack.plugins')
const webpackOptimization = require('./webpack.optimization')
const webpackStats = require('./webpack.stats')

const webpackConfigBase = {
	name: `main`,
	target: `node`,
	cache: {
		type: `filesystem`,
	},
	entry: {
		main: webpackPaths.entry.main,
	},
	module: {
		rules: webpackRules,
	},
	resolve: webpackPaths.common.resolve,
	plugins: [...webpackPlugins.common],
	optimization: { ...webpackOptimization.common },
	performance: {
		hints: `warning`,
	},
	stats: webpackStats,
}

module.exports = webpackConfigBase
