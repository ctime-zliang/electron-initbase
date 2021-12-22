import { TResponse } from '../../lib/Response'
import { IExtendKoaContext } from '@utypes/koa.types'
import Controller from '../../lib/Controller'
import HomeService, { THomeService } from '../service/home'

class HomeController extends Controller {
	private homeService: THomeService = new HomeService()
	constructor() {
		super()
		this.homeService = new HomeService()
	}

	async render(ctx: IExtendKoaContext): Promise<void> {
		const title = `koa msvc`
		/* 渲染视图 */
		await ctx.render('./home/main', {
			title: title,
		})
	}

	async rtest(ctx: IExtendKoaContext, res: TResponse): Promise<void> {
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
export default new HomeController()
