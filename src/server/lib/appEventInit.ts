import koa from 'koa'
import { TExtendKoaContext } from '@/utypes/koa.types'
import errorHandler from './error'

export default (app: koa): void => {
	app.on('error', (error: any, ctx: TExtendKoaContext): void => {
		const result: any = errorHandler(error, ctx)
		console.log(result)
	})
}
