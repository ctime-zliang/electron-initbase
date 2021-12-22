import Response, { TResponse } from '../lib/Response'
import { IExtendKoaContext } from '@utypes/koa.types'

export type TErrorRoute = (ctx: IExtendKoaContext) => Promise<any>
export type TErrorRouteMap = {
	404: TErrorRoute
	[key: string]: any
}

export default {
	404: async (ctx: IExtendKoaContext): Promise<any> => {
		ctx.status = 404
		if (ctx.method.toLowerCase() === 'post') {
			const res = new Response()
			res.setRetCode(-1).setStatus(ctx.status).setText('API Not Found').flush(ctx)
			return ''
		}
		ctx.body = `
            <section style="font-size: 30px; color: #000000; font-weight: 900; text-align: center;">404 Not Found. Router</section>
        `
	},
}
