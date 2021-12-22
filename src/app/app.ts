import { createBrowserWindow } from './utils/createBrowserWindow'

export const startElectronApp = async (url: string) => {
	const win: any = await createBrowserWindow(url)
	win.once('ready-to-show', async () => {
		console.log(`Main Browser Window Ready.`)
	})
}
