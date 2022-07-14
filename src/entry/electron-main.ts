import { app, ipcMain } from 'electron'
import { startServer } from '@server/app'
import { baseServerCongfig } from '@config/config'
import { serverOnly } from '@utils/runTools'
import simpleLogger from '@utils/simpleLogger'
import { TKoaServerResult } from '@utypes/koa.types'
import { startElectronApp } from '@app/app'
import { initElectronApp } from '@app/lib/init'
import { initRegisterSchemesAsPrivileged } from '@app/modules/registerAppProtocol/registerAppProtocol'

export const startApp = async (): Promise<boolean> => {
	if (serverOnly()) {
		const mainInfo: TKoaServerResult = await startServer(baseServerCongfig.host, baseServerCongfig.port)
		simpleLogger.trace(`App.running - http://${mainInfo.hostname}:${mainInfo.port}`)
		return true
	}
	initRegisterSchemesAsPrivileged()
	await app.whenReady()
	await initElectronApp()
	const mainInfo: TKoaServerResult = await startServer(baseServerCongfig.host, baseServerCongfig.port)
	// const mainURL: string = `http://${mainInfo.hostname}:${mainInfo.port}/proxy-enter?rdm=` + Math.random()
	const mainURL: string = `http://${mainInfo.hostname}:${mainInfo.port}?rdm=` + Math.random()
	simpleLogger.trace(`App.running - ${mainURL}`)
	await startElectronApp(`${mainURL}`)
	// await startElectronApp(`../static/html/test-renderer-block.html`, { isLoadFile: true })
	return true
}

startApp()
