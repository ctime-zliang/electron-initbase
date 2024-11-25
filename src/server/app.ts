import koa from 'koa'
import { AddressInfo } from 'net'
import init from './lib/init'
import { TKoaServerResult } from '@utypes/koa.types'
import { eventInit, eventEmitter } from './lib/eventInit'
import appEventInit from './lib/appEventInit'

export const startServer = async (hostname: string, port: number): Promise<TKoaServerResult> => {
	const app: koa = new koa()

	init(app)
	eventInit(app)
	appEventInit(app)

	return new Promise(async (_: (a: any) => void): Promise<void> => {
		const server: any = app.listen(port, hostname).on('listening', () => {
			const addressInfo: {
				port: number
				address: string
			} = server.address() as AddressInfo
			eventEmitter.emit('app/common', `App has finished starting...`)
			_({ app, port: addressInfo.port, hostname: addressInfo.address })
		})
	})
}
