import { TResponse } from '../../lib/Response'
import { TExtendKoaContext } from '@utypes/koa.types'
import Controller from '../../lib/Controller'
import HomeService, { THomeService } from '../service/home'

class HomeController extends Controller {
	private homeService: THomeService = new HomeService()
	constructor() {
		super()
		this.homeService = new HomeService()
	}

	async render(ctx: TExtendKoaContext, res: TResponse): Promise<void> {
		const content: string = `
			<h3>Started Server Successed. ---- koa msvc</h3>
		`
		/**
		 * 使用内置的 html 输出方法输出 html 字符串
		 */
		res.setHtml(`<div>${content}</div>`)

		// /**
		//  * 使用 koa-ejs 输出 html 字符串
		//  */
		// await ctx.render('./ejs-home', {
		// 	title: `electron app`,
		// 	username: `ctimezliang`,
		// 	content
		// })
	}

	async rtest(ctx: TExtendKoaContext, res: TResponse): Promise<void> {
		const query = ctx.query
		const serRes = await this.homeService.fetchData()
		res.setJson({
			...serRes,
			...query,
			controllerKey: 'Key added by Controller',
		})
	}
}

export type THomeController = HomeController
export default HomeController
