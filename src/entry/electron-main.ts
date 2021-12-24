import { app } from 'electron'
import { startKoaServer } from '@server/app'
import { baseServerCongfig } from '@config/config'
import { koaServerOnly } from '@utils/runTools'
import simpleLogger from '@utils/simpleLogger'
import { IKoaServerResult } from '@utypes/koa.types'
import { initElectronSystem } from '@app/utils/initElectronSystem'
import { startElectronApp } from '@app/app'

export const startApp = async (): Promise<boolean> => {
	if (koaServerOnly()) {
		const mainInfo: IKoaServerResult = await startKoaServer(baseServerCongfig.host, baseServerCongfig.port)
		simpleLogger.trace(`App.running - http://${mainInfo.hostname}:${mainInfo.port}`)
		return true
	}
	await initElectronSystem()
	await app.whenReady()
	const mainInfo: IKoaServerResult = await startKoaServer(baseServerCongfig.host, baseServerCongfig.port)
	const mainURL: string = `http://${mainInfo.hostname}:${mainInfo.port}/proxy-enter`
	simpleLogger.trace(`App.running - ${mainURL}`)
	await startElectronApp(`${mainURL}`)
	return true
}

startApp()
