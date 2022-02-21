import { BrowserWindow } from 'electron'
import { addBrowserWindowEvents } from './modules/browserWindowEvent/browserWindowEvent'
import { addUserEvents } from './modules/userEvents/addUserEvents'
import { createBrowserWindow } from './modules/createBrowserWindow/createBrowserWindow'

require('@electron/remote/main').initialize()

export const startElectronApp = async (url: string, options: { [key: string]: any } = {}): Promise<void> => {
	const win: BrowserWindow = await createBrowserWindow(url, options)
	require('@electron/remote/main').enable(win.webContents)
	addBrowserWindowEvents(win)
	addUserEvents()
}
