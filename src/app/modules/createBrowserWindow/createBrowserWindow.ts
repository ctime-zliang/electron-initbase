import { electronAppBaseConfig } from '@config/config'
import { BrowserWindow } from 'electron'
import { electronAppRuntimeProfile } from '../../core/runtimeProfile'
import { createElectronAppRuntimeProfile } from '../../utils/createElectronRuntimeProfile'

export const createBrowserWindow = async (
	url: string,
	extraOption: { [key: string]: any } = {},
	windowOption: { [key: string]: any } = {}
): Promise<BrowserWindow> => {
	let win: BrowserWindow = new BrowserWindow({
		width: windowOption.width || 1280,
		height: windowOption.height || 720,
		useContentSize: true,
		title: electronAppBaseConfig.initElectronAppTitle,
		show: true,
		webPreferences: {
			nodeIntegration: true,
			devTools: true,
		},
		...windowOption,
	})
	win.loadURL(url)
	win.webContents.openDevTools()
	electronAppRuntimeProfile.globalActiveWindowId = win.id
	electronAppRuntimeProfile.globalWindowMap[win.id] = createElectronAppRuntimeProfile({
		id: win.id,
		win,
		pageInitURL: url,
		pageInitURLData: new URL(url),
	})
	return win
}
