const fs = require('fs')
const path = require('path')

const sortKeys = async function (key) {
	return new Promise((_, reject) => {
		fs.readFile(path.join(__dirname, '../package.json'), function (err, data) {
			if (err) {
				console.log(`Read File Error`, err)
				reject(err)
				return
			}
			const sourcePkgData = JSON.parse(data)
			const sourceKeyObject = sourcePkgData[key]
			const newPkgData = { ...sourcePkgData }
			newPkgData[key] = {}
			Object.keys(sourceKeyObject)
				.sort()
				.forEach((item, index) => {
					newPkgData[key][item] = sourceKeyObject[item]
				})
			fs.writeFileSync(path.join(__dirname, './sort-package.json'), JSON.stringify(newPkgData, null, '\t'))
			_(`Done!`)
		})
	})
}

sortKeys('devDependencies')
sortKeys('dependencies')
