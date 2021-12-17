const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { ESBuildPlugin } = require('esbuild-loader')
const paths = require('./webpack.paths')
const utils = require('../utils')

const pathOfClientPathAboutDevBuild = utils.clientOnly() ? paths.client.devBuild.path() : paths.client.devBuild.pathForSSR()
const pathOfClientPathAboutProdBuild = utils.clientOnly() ? paths.client.prodBuild.path() : paths.client.prodBuild.pathForSSR()

const htmlWebpackPluginOptions = {
	title: `React Application`,
	inject: true,
	hash: false,
	cache: true,
	showErrors: true,
	minify: {
		minifyCSS: true,
		minifyJS: true,
	},
}

const miniCssExtractPluginOptions = {
	ignoreOrder: false,
	attributes: { id: `link${new Date().getTime()}` },
}

module.exports = {
	common: [
		new WebpackManifestPlugin({ fileName: 'manifest.json' }),
		new ESBuildPlugin(),
		new MiniCssExtractPlugin({
			...miniCssExtractPluginOptions,
			filename: paths.common.cssExtract.filename,
			chunkFilename: paths.common.cssExtract.stylesSheetChunkFilename,
		}),
		new CaseSensitivePathsPlugin(),
		new TypedCssModulesPlugin({
			globPattern: 'src/**/*.(css|less|sass)',
		}),
		new webpack.ProgressPlugin(),
		new webpack.DefinePlugin({
			'process.env.CLIENT_ONLY': JSON.stringify(utils.clientOnly()),
		}),
	],
	devBuild: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
		new ReactRefreshPlugin(),
		new HtmlWebpackPlugin({
			...htmlWebpackPluginOptions,
			filename: paths.client.devBuild.htmlWebpackPluginFilename,
			template: paths.client.devBuild.htmlWebpackPluginTemplate,
		}),
		new webpack.HotModuleReplacementPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: paths.common.i18n.locales,
					to: path.join(pathOfClientPathAboutDevBuild, '/locales'),
				},
			],
		}),
	].filter(Boolean),
	prodBuild: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
		}),
		new HtmlWebpackPlugin({
			...htmlWebpackPluginOptions,
			filename: paths.client.prodBuild.htmlWebpackPluginFilename,
			template: paths.client.prodBuild.htmlWebpackPluginTemplate,
		}),
		new BundleAnalyzerPlugin({
			analyzerPort: 0,
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: paths.common.i18n.locales,
					to: path.join(pathOfClientPathAboutProdBuild, 'locales'),
					globOptions: {
						ignore: ['*.missing.json'],
					},
				},
			],
		}),
	].filter(Boolean),
}
