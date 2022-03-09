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
		const content = `Started Server Successed. ---- koa msvc`
		res.setHtml(`<div>${content}</div>`)
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
export default new HomeController()
