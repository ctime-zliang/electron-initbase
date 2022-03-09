import koa from 'koa'
import { TExtendKoaContext } from '@utypes/koa.types'

export default () => {
	return async (ctx: TExtendKoaContext, next: koa.Next): Promise<void | undefined> => {
		if (['/favicon.ico'].includes(ctx.originalUrl)) {
			ctx.body = ``
			return
		}
		await next()
	}
}
