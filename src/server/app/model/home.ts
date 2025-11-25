class HomeModel {
	constructor(options: { [key: string]: any } = {}) {
		// super(options)
	}

	async fetchData(): Promise<{ [key: string]: any }> {
		const res: { [key: string]: any } = {
			results: { modelKey: 'Key added by Model' },
		}
		return res.results
	}
}

export type THomeModel = HomeModel
export default HomeModel
