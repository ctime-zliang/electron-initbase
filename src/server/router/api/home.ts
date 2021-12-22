import koa from 'koa'
import { IExtendKoaContext, TKoaRouter } from '@utypes/koa.types'
import HomeController from '../../app/controller/home'

const routes: Array<TKoaRouter> = [
	{
		desc: '测试 API',
		method: 'get',
		path: '/rtest',
		async before() {
			/* before hook */
			return true
		},
		async after() {
			/* after hook */
		},
		action: HomeController.invokeAction('rtest'),
	},
	{
		desc: '测试 API',
		method: 'get',
		path: '/a/:p',
		async action(ctx: IExtendKoaContext) {
			console.log(`=== Route: /a/:p`)
			ctx.status = 200
			ctx.body = `/a/:p`
		},
	},
	{
		desc: '测试 API',
		method: 'get',
		path: '/a/123',
		async action(ctx: IExtendKoaContext) {
			console.log(`=== Route: /a/123`)
			ctx.status = 200
			ctx.body = `/a/123`
		},
	},
]

export default routes
