const utils = require('../common/utils')

module.exports = {
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
}
