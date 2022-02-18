import { BrowserWindow } from 'electron'
import { addBrowserWindowEvents } from './modules/browserWindowEvent/browserWindowEvent'
import { addUserEvents } from './modules/userEvents/addUserEvents'
import { createBrowserWindow } from './modules/createBrowserWindow/createBrowserWindow'

export const startElectronApp = async (url: string): Promise<void> => {
	const win: BrowserWindow = await createBrowserWindow(url)
	addBrowserWindowEvents(win)
	addUserEvents()
}
