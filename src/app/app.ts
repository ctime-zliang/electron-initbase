import { addBrowserWindowEevnt } from './lib/browserWindowEevnt/addBrowserWindowEevnt'
import { addUserEvent } from './lib/userEvent/addUserEvent'
import { createBrowserWindow } from './utils/createBrowserWindow'

export const startElectronApp = async (url: string) => {
	const win: any = await createBrowserWindow(url)
	addBrowserWindowEevnt(win)
	addUserEvent()
}
