import { electronAppBaseConfig } from '@config/config'
import { BrowserWindow } from 'electron'
import { electronAppRuntimeProfile } from '../core/runtimeProfile'
import { createElectronAppRuntimeProfile } from './createElectronRuntimeProfile'

export const createBrowserWindow = async (url: string, extraOption: { [key: string]: any } = {}, windowOption: { [key: string]: any } = {}) => {
	let win: any = new BrowserWindow({
		width: windowOption.width || 1280,
		height: windowOption.height || 720,
		useContentSize: true,
		title: electronAppBaseConfig.initElectronAppTitle,
		show: true,
		...windowOption,
	})
	win.loadURL(url)
	electronAppRuntimeProfile.globalActiveWindowId = win.id
	electronAppRuntimeProfile.globalWindowMap[win.id] = createElectronAppRuntimeProfile({
		win,
		pageInitURL: url,
		windowBounds: win.getBounds(),
	})
	win.on('focus', (e: any) => {
		console.log(e)
	})
	win.on('close', (e: any) => {
		delete electronAppRuntimeProfile.globalWindowMap[win.id]
		console.log(e)
	})
	return win
}
