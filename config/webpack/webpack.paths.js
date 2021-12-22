const path = require('path')
const utils = require('../utils')

module.exports = {
	common: {
		// buildRoot: utils.resolveDirectory(`./dist/`),
		resolve: {
			extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
			alias: {
				'@': utils.resolveDirectory('./src/'),
				'@app': utils.resolveDirectory('./src/app/'),
				'@config': utils.resolveDirectory('./src/config/'),
				'@server': utils.resolveDirectory('./src/server/'),
				'@utils': utils.resolveDirectory('./src/utils/'),
				'@utypes': utils.resolveDirectory('./src/utypes/'),
			},
		},
	},
	entry: {
		main: utils.resolveDirectory(`./src/entry/main.ts`),
	},
	output: {
		filename: `app.js`,
		chunkFilename: `chunks.js`,
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
