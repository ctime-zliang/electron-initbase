// export function createObjects() {
// 	let returnObjects = []
// 	for (let index = 0; index < 500; index++) {
// 		const returnObject: any = {}
// 		for (let index2 = 0; index2 < 50; index2++) {
// 			returnObject[index2] = `${index2}`
// 		}
// 		returnObjects.push(returnObject)
// 	}
// 	console.log(`return value ${Date.now()}`)
// 	return returnObjects
// }

// export function blockTheMainProcess() {
// 	console.log('now start block the main process')
// 	while (1) {
// 		// block main process
// 	}
// }

// export function extraTest() {
// 	//@ts-ignore
// 	global.mainProcessModule = {
// 		createObjects,
// 	}
// 	ipcMain.on('blockTheMainProcess', blockTheMainProcess)
// }
export default {}
