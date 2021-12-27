import { app } from 'electron'
import { startKoaServer } from '@server/app'
import { baseServerCongfig } from '@config/config'
import { koaServerOnly } from '@utils/runTools'
import simpleLogger from '@utils/simpleLogger'
import { IKoaServerResult } from '@utypes/koa.types'
import { startElectronApp } from '@app/app'
import { initElectronAppEvent } from '@app/lib/electronAppEvent/electronAppEvent'

export const startApp = async (): Promise<boolean> => {
	if (koaServerOnly()) {
		const mainInfo: IKoaServerResult = await startKoaServer(baseServerCongfig.host, baseServerCongfig.port)
		simpleLogger.trace(`App.running - http://${mainInfo.hostname}:${mainInfo.port}`)
		return true
	}
	await initElectronAppEvent()
	await app.whenReady()
	const mainInfo: IKoaServerResult = await startKoaServer(baseServerCongfig.host, baseServerCongfig.port)
	const mainURL: string = `http://${mainInfo.hostname}:${mainInfo.port}/proxy-enter?rdm=` + Math.random()
	simpleLogger.trace(`App.running - ${mainURL}`)
	await startElectronApp(`${mainURL}`)
	return true
}

startApp()
