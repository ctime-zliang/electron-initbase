const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const ApplicationDirectory = fs.realpathSync(process.cwd())

module.exports = {
	resolveDirectory(relativePath) {
		return path.resolve(ApplicationDirectory, relativePath)
	},
	syncReadJsonFile(path, encode = 'utf-8') {
		try {
			const fileContent = fs.readFileSync(path, encode)
			return JSON.parse(fileContent)
		} catch (e) {
			console.log(`Read JSON File Error`)
			console.log(e)
			return null
		}
	},
	timeStamp() {
		const d = new Date()
		const arr = [d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()]
		return arr
			.map(item => {
				return item > 9 ? String(item) : '0' + String(item)
			})
			.join('')
	},
	createLoaderResult(string, isEsm = false) {
		const prefix = isEsm ? 'export default ' : 'module.exports = '
		return prefix + string
	},
	getStringExportContent(exportString) {
		try {
			if (/module.exports(.*)/gi.test(exportString)) {
				return exportString.replace(/module.exports(\s+)=(\s+)/gi, '')
			}
			if (/export default(.*)/gi.test(exportString)) {
				return exportString.replace(/export default(\s+)/gi, '')
			}
			return exportString
		} catch (e) {
			console.log(e)
			return
		}
	},
}
