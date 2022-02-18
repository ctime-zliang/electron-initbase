import { BrowserWindow } from 'electron'
import { electronAppRuntimeProfile } from '../../core/runtimeProfile'

/*
	Electron Window 事件监听
 */
export const addBrowserWindowEvents = (win: BrowserWindow): void => {
	win.on('focus', (e: any): void => {
		electronAppRuntimeProfile.globalActiveWindowId = e.sender.id
	})
	win.on('close', (e: any): void => {
		delete electronAppRuntimeProfile.globalWindowMap[win.id]
	})
	win.once('ready-to-show', (): void => {
		console.log(`Main Browser Window Ready.`)
	})
}
