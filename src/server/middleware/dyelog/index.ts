import koa from 'koa'
import dye from './dye'
import { TExtendKoaContext } from '@utypes/koa.types'

export default (options: { [key: string]: any } = {}) => {
	return async (ctx: TExtendKoaContext, next: koa.Next): Promise<void | undefined> => {
		// const obj: {[key: string]: any} = utils.parseUrl(ctx.request.url)
		ctx.res.on('finish', (): void => {
			dye.handleDyeLog(ctx, options.debug)
		})
		await next()
	}
}
