import koa from 'koa'
import init from './lib/init'
import errorHandler from './error'
import { TKoaServerResult } from '@utypes/koa.types'
import { AddressInfo } from 'net'

export const startKoaServer = async (hostname: string, port: number): Promise<TKoaServerResult> => {
	const app = new koa()

	init(app)

	app.on('error', (error, ctx) => {
		const result = errorHandler(error, ctx)
		console.log(result)
	})

	return new Promise(async _ => {
		const server = app.listen(port, hostname).on('listening', () => {
			const addressInfo = server.address() as AddressInfo
			_({ app, port: addressInfo.port, hostname: addressInfo.address })
		})
	})
}
