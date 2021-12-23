import { TKoaRouter } from '@utypes/koa.types'
import HomeController from '../../app/controller/home'

const routes: Array<TKoaRouter> = [
	{
		desc: 'Home Page',
		method: 'get',
		path: '/',
		async before() {
			/* before hook */
			return true
		},
		async after() {
			/* after hook */
		},
		action: HomeController.invokeAction('render'),
	},
]

export default routes
