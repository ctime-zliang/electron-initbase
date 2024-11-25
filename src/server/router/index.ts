import koa from 'koa'
import koaRouter from 'koa-router'
import { TExtendKoaContext } from '@utypes/koa.types'
import webRouter from './web'
import apiRouter from './api'
import errorRouterMap, { TErrorRoute, TErrorRouteMap } from './error'

const routerList = [webRouter, apiRouter]

export default (app: koa) => {
	routerList.forEach((router: koaRouter): void => {
		app.use(router.routes())
		app.use(router.allowedMethods())
	})
	app.use(async (ctx: TExtendKoaContext, next: koa.Next): Promise<void> => {
		const errRouteItem: TErrorRoute | null = (errorRouterMap as TErrorRouteMap)[String(ctx.status)] || null
		if (!ctx.routerMatched && errRouteItem) {
			await errRouteItem(ctx)
		}
		await next()
	})
}
