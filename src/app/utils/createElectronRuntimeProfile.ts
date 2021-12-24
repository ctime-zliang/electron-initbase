import { IGlobalWindowItemProfile } from '@utypes/electron.types'

export const createElectronAppRuntimeProfile = (option: IGlobalWindowItemProfile): IGlobalWindowItemProfile => {
	return Object.create({
		id: option.id,
		win: option.win,
		pageInitURL: option.pageInitURL,
		windowBounds: option.windowBounds,
	})
}
