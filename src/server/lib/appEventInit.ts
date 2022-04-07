import koa from 'koa'
import { TExtendKoaContext } from '@/utypes/koa.types'
import errorHandler from './error'

export default (app: koa) => {
	app.on('error', (error: any, ctx: TExtendKoaContext) => {
		const result: any = errorHandler(error, ctx)
		console.log(result)
	})
}
