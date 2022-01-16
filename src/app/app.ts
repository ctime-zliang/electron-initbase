import { BrowserWindow } from 'electron'
import { addBrowserWindowEevnt } from './modules/browserWindowEevnt/browserWindowEevnt'
import { registerAppProtocol } from './modules/registerAppProtocol/registerAppProtocol'
import { addUserEvent } from './modules/userEvent/addUserEvent'
import { createBrowserWindow } from './modules/createBrowserWindow/createBrowserWindow'

export const startElectronApp = async (url: string) => {
	registerAppProtocol()
	const win: BrowserWindow = await createBrowserWindow(url)
	addBrowserWindowEevnt(win)
	addUserEvent()
}
