import koa from 'koa'
import { TExtendKoaContext, TKoaRouter } from '@utypes/koa.types'
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
]

export default routes
