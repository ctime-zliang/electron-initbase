const path = require('path')
// const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const { ESBuildMinifyPlugin } = require('esbuild-loader')

module.exports = {
	// minimize: true,
	minimizer: [
		new ESBuildMinifyPlugin({
			target: `es2018`,
			minify: true,
		}),
		// new UglifyjsWebpackPlugin({
		// 	cache: false,
		// 	parallel: true,
		// 	sourceMap: true,
		// 	extractComments: true,
		// 	chunkFilter(chunk) {
		// 		console.log(`=====>>>>> uglifyjs-webpack-plugin: ${chunk.name}`)
		// 		return true
		// 	},
		// }),
	],
	moduleIds: `named`,
	sideEffects: true,
	usedExports: true,
}
