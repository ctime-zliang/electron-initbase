import { BrowserWindow } from 'electron'
import { addBrowserWindowEevnt } from './lib/browserWindowEevnt/browserWindowEevnt'
import { registerAppProtocol } from './lib/registerAppProtocol/registerAppProtocol'
import { addUserEvent } from './lib/userEvent/addUserEvent'
import { createBrowserWindow } from './utils/createBrowserWindow'

export const startElectronApp = async (url: string) => {
	registerAppProtocol()
	const win: BrowserWindow = await createBrowserWindow(url)
	addBrowserWindowEevnt(win)
	addUserEvent()
}
