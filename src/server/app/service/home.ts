import HomeModel, { THomeModel } from '../model/home'

class HomeService {
	private homeModel: THomeModel = new HomeModel()
	constructor() {
		this.homeModel = new HomeModel()
	}

	async fetchData(): Promise<{ [key: string]: any }> {
		const fetchListRes = await this.homeModel.fetchData()
		return { ...fetchListRes, serviceKey: 'Key added by Service' }
	}
}

export type THomeService = HomeService
export default HomeService
