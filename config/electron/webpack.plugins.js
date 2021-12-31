const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const utils = require('../common/utils')

module.exports = {
	common() {
		return [
			new CopyWebpackPlugin({
				patterns: [
					{
						from: './src/package.json',
						to: './electron/package.json',
					},
				],
			}),
		]
	},
}
