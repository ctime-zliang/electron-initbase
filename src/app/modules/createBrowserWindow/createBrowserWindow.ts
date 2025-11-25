import { BrowserWindow } from 'electron'
import { electronAppBaseConfig } from '@config/config'
import { electronAppRuntimeProfile } from '../../core/runtimeProfile'
import { createElectronAppRuntimeProfile } from '../../utils/createElectronRuntimeProfile'
import { TGlobalWindowItemProfile } from '@/utypes/electron.types'

export const createBrowserWindow = async (
	urlOrFilePath: string,
	extraOption: { [key: string]: any } = {},
	windowOption: { [key: string]: any } = {}
): Promise<BrowserWindow> => {
	let win: BrowserWindow = new BrowserWindow({
		width: windowOption.width || 1368,
		height: windowOption.height || 768,
		useContentSize: true,
		title: electronAppBaseConfig.initElectronAppTitle,
		show: true,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			// devTools: false,
		},
		...windowOption,
	})
	if (extraOption.isLoadFile) {
		win.loadFile(urlOrFilePath)
	} else {
		win.loadURL(urlOrFilePath)
	}
	// win.webContents.openDevTools()
	electronAppRuntimeProfile.globalActiveWindowId = win.id
	electronAppRuntimeProfile.globalWindowMap[win.id] = createElectronAppRuntimeProfile({
		id: win.id,
		win,
		pageInitURL: urlOrFilePath,
		pageInitURLData: extraOption.isLoadFile ? null : new URL(urlOrFilePath),
		capturedScreenSourceId: '',
	})
	win.on('close', (e: any): void => {
		/* eslint-disable */
		;(win as any) = null
	})
	win.webContents.executeJavaScript('window.IS_DESKTOP = true;')
	return win
}
