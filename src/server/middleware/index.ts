import koa from 'koa'
import bodyParser from 'koa-bodyparser'
import koaCors from 'koa-cors'
import router from '../router'
import parameter from './parameter'
import dyeLog from './dyelog'
import interceptor from './interceptor'
import { TExtendKoaContext } from '@utypes/koa.types'
import { proxyRemote } from './proxyRemote'
import { proxyWebCanvas } from './proxyWebCanvas'

export default (app: koa): void => {
	app.use(interceptor())
	app.use(
		koaCors({
			//@ts-ignore
			origin(ctx: TExtendKoaContext) {
				return ctx.header.origin
			},
			exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
			credentials: true,
			allowMethods: ['GET', 'POST', 'DELETE'],
			allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
		})
	)
	app.use(bodyParser())
	app.use(parameter())
	app.use(
		dyeLog({
			debug: true,
		})
	)
	router(app)
	app.use(proxyRemote())
	app.use(proxyWebCanvas())
	app.use(async (ctx: TExtendKoaContext, next: koa.Next): Promise<void> => {
		console.log(`==================>>>>> After Router`)
		await next()
	})
}
