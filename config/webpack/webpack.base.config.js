const paths = require('./webpack.paths')
const rules = require('./webpack.rules')
const plugins = require('./webpack.plugins')
const optimization = require('./webpack.optimization')
const stats = require('./webpack.stats')

const webpackConfigBase = {
	name: `main`,
	target: `web`,
	cache: {
		type: `filesystem`,
	},
	entry: {
		main: paths.entry.main,
	},
	module: {
		rules,
	},
	resolve: paths.common.resolve,
	plugins: [...plugins.common],
	optimization: { ...optimization.common },
	performance: {
		hints: `warning`,
	},
	stats,
}

module.exports = webpackConfigBase
