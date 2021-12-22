import { app } from 'electron'

export const initElectronSystem = async () => {
	app.on('window-all-closed', (e: any) => {
		if (process.platform !== 'darwin') {
			app.quit()
		}
	})
	app.on('browser-window-created', (e: any, browserWindow: any) => {
		browserWindow.webContents.on('context-menu', (ctxEvent: any, ctxParams: any) => {
			console.log(`context-menu`)
		})
	})
}
