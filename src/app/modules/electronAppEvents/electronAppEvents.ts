import { app, WebContents } from 'electron'
import { electronAppRuntimeProfile } from '../../core/runtimeProfile'
import { TCertificateErrorCallback } from '@/utypes/electron.types'

/*
	Electron App 全局事件监听
 */
export const initElectronAppEvent = (): void => {
	app.on('browser-window-created', (e: any, browserWindow: any): void => {
		console.log(`Browser Created.`)
		// browserWindow.webContents.on('context-menu', (ctxEvent: any, ctxParams: any) => {
		// 	console.log(`context-menu`)
		// })
	})
	app.on(
		'certificate-error' as any,
		(e: any, webContents: WebContents, url: string, error: any, certificate: string, callback: TCertificateErrorCallback): void => {
			console.log(`Certificate Error.`)
			callback(true)
		}
	)
	app.on('window-all-closed', (e: any): void => {
		if (process.platform !== 'darwin') {
			electronAppRuntimeProfile.globalActiveWindowId = null
			electronAppRuntimeProfile.globalWindowMap = {}
			app.quit()
		}
	})
}
