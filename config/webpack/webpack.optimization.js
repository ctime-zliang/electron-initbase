const path = require('path')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const { ESBuildMinifyPlugin } = require('esbuild-loader')

module.exports = {
	common: {
		// minimize: true,
		minimizer: [
			new ESBuildMinifyPlugin({
				target: `es2018`,
				minify: true,
			}),
			new UglifyjsWebpackPlugin({
				/* 
					test: 匹配需要压缩的文件
					include:  指定包含
					exclude:  指定不包含
				 */
				cache: false,
				parallel: true,
				sourceMap: true,
				extractComments: true,
				chunkFilter(chunk) {
					console.log(`=====>>>>> uglifyjs-webpack-plugin: ${chunk.name}`)
					return true
				},
			}),
		],
		moduleIds: `named`,
		sideEffects: true,
		usedExports: true,
		splitChunks: {
			chunks: `all`,
			minSize: 30000,
			automaticNameDelimiter: `.`,
			cacheGroups: {
				default: {
					name: `common`,
					chunks: `all`,
					minChunks: 2,
					priority: -10,
					reuseExistingChunk: true,
				},
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: `vendors`,
					chunks: `all`,
					priority: -9,
					reuseExistingChunk: true,
				},
				// public: {
				// 	test: path.resolve('src/app/public'),
				// 	name: `public`,
				// 	chunks: `all`,
				// 	priority: -8,
				// 	reuseExistingChunk: true,
				// 	enforce: true,
				// },
				// react: {
				// 	test(module) {
				// 		return /react/.test(module.context)
				// 	},
				// 	name: `react`,
				// 	chunks: `all`,
				// 	priority: -8
				// }
			},
		},
	},
}
