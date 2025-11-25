import koaRouter from 'koa-router'
import koa from 'koa'
import { TRouterMethod, TKoaRouter, TExtendKoaContext } from '@utypes/koa.types'

export function routerExec(routes: Array<TKoaRouter>): koaRouter {
	const kRouter: koaRouter = new koaRouter()
	routes.forEach((routeItem: TKoaRouter): void => {
		const method: TRouterMethod = routeItem.method.toLowerCase() as TRouterMethod
		const path: string = routeItem.path
		kRouter[method](path, async (ctx: TExtendKoaContext, next: koa.Next): Promise<void> => {
			let willGo: boolean = true
			try {
				ctx.status = 200
				ctx.routerMatched = true
				if (typeof routeItem.before == 'function') {
					willGo = await routeItem.before(ctx, next)
				}
				if (willGo) {
					await routeItem.action.call(kRouter, ctx)
				}
				if (typeof routeItem.after == 'function') {
					routeItem.after(ctx)
				}
				await next()
			} catch (e: any) {
				ctx.app.emit('error', e, ctx)
			}
		})
	})
	return kRouter
}
