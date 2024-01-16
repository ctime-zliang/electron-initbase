import Response from '../lib/Response'
import { TExtendKoaContext } from '@utypes/koa.types'

export type TErrorRoute = (ctx: TExtendKoaContext) => Promise<any>
export type TErrorRouteMap = {
	404: TErrorRoute
	[key: string]: any
}

export default {
	404: async (ctx: TExtendKoaContext): Promise<void> => {
		ctx.status = 404
		if (ctx.method.toLowerCase() === 'post') {
			const res = new Response()
			res.setRetCode(-1).setStatus(ctx.status).setText('API Not Found').flush(ctx)
			return
		}
		ctx.body = `
            <section style="font-size: 30px; color: #ff0000; font-weight: 900; text-align: center;">404 Not Found. Router</section>
        `
	},
	500: async (ctx: TExtendKoaContext): Promise<void> => {
		ctx.status = 500
		if (ctx.method.toLowerCase() === 'post') {
			const res = new Response()
			res.setRetCode(-1).setStatus(ctx.status).setText('API Error').flush(ctx)
			return
		}
		ctx.body = `
            <section style="font-size: 30px; color: #ff0000; font-weight: 900; text-align: center;">500 Error. Router</section>
        `
	},
}
