import { BrowserWindow } from 'electron'
import { electronAppRuntimeProfile } from '../../core/runtimeProfile'

export const addBrowserWindowEevnt = (win: BrowserWindow) => {
	win.on('focus', (e: any) => {
		electronAppRuntimeProfile.globalActiveWindowId = e.sender.id
	})
	win.on('close', (e: any) => {
		delete electronAppRuntimeProfile.globalWindowMap[win.id]
	})
	win.once('ready-to-show', async () => {
		console.log(`Main Browser Window Ready.`)
	})
}
