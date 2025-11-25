import koa from 'koa'
import { TExtendKoaContext } from '@utypes/koa.types'

export default () => {
	return async (ctx: TExtendKoaContext, next: koa.Next): Promise<void | undefined> => {
		ctx.requestParams = {
			...(ctx.request.query || {}),
			...((ctx.request as any)?.body || {}),
		}
		await next()
	}
}
