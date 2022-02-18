import { app } from 'electron'

export const initElectronAppEvent = (): void => {
	app.on('window-all-closed', (e: any): void => {
		if (process.platform !== 'darwin') {
			app.quit()
		}
	})
	app.on('browser-window-created', (e: any, browserWindow: any): void => {
		console.log(`Browser Created.`)
		// browserWindow.webContents.on('context-menu', (ctxEvent: any, ctxParams: any) => {
		// 	console.log(`context-menu`)
		// })
	})
}
