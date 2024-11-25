const utils = require('../common/utils')

module.exports = {
	entry: {
		main: utils.resolveDirectory(`./src/entry/electron-main.ts`),
	},
	output: {
		filename: `./electron/app.js`,
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
