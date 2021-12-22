import { IGlobalWindowItemProfile } from '@utypes/electron.types'

export const createElectronAppRuntimeProfile = (option: { [key: string]: any } = {}): IGlobalWindowItemProfile => {
	return Object.create({
		id: option.win.id,
		win: option.win,
		pageInitURL: option.pageInitURL,
		windowBounds: option.windowBounds,
	})
}
