import koa from 'koa'
import init from './lib/init'
import errorHandler from './error'
import { TExtendKoaContext, TKoaServerResult } from '@utypes/koa.types'
import { AddressInfo } from 'net'

export const startServer = async (hostname: string, port: number): Promise<TKoaServerResult> => {
	const app: koa = new koa()

	init(app)

	app.on('error', (error: any, ctx: TExtendKoaContext) => {
		const result: any = errorHandler(error, ctx)
		console.log(result)
	})

	return new Promise(async _ => {
		const server: any = app.listen(port, hostname).on('listening', () => {
			const addressInfo: {
				port: number
				address: string
			} = server.address() as AddressInfo
			_({ app, port: addressInfo.port, hostname: addressInfo.address })
		})
	})
}
