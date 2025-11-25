const utils = require('../common/utils')

module.exports = {
	entry: {
		main: utils.resolveDirectory(`./src/entry/server-main.ts`),
	},
	output: {
		filename: `server/app.js`,
	},
	devBuild: {
		publicPath: '/',
		path() {
			return utils.resolveDirectory(`./dist`)
		},
	},
	prodBuild: {
		publicPath: '/',
		path() {
			return utils.resolveDirectory(`./dist`)
		},
	},
}
