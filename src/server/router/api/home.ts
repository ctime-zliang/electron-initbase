import { TKoaRouter } from '@utypes/koa.types'
import HomeController from '../../app/controller/home'
import { invokeAction } from '../../lib/Controller'

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
		action: invokeAction(HomeController, 'rtest'),
	},
]

export default routes
