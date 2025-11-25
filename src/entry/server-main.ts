import { startServer } from '@server/app'
import { baseServerCongfig } from '@config/config'
import simpleLogger from '@utils/simpleLogger'
import { TKoaServerResult } from '@utypes/koa.types'

const runServerApp = async (): Promise<boolean> => {
	const mainInfo: TKoaServerResult = await startServer(baseServerCongfig.host, baseServerCongfig.port)
	simpleLogger.trace(`App.running - http://${mainInfo.hostname}:${mainInfo.port}`)
	return true
}

runServerApp()
