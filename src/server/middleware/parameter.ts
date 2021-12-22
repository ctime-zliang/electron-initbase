import koa from 'koa'
import { IExtendKoaContext } from '@utypes/koa.types'

export default () => {
	return async (ctx: IExtendKoaContext, next: koa.Next): Promise<void | undefined> => {
		ctx.requestParams = {
			...(ctx.request.query || {}),
			...((ctx.request as any)?.body || {}),
		}
		await next()
	}
}
