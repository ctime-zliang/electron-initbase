import { IGlobalWindowItemProfile } from '@utypes/electron.types'

export const createElectronAppRuntimeProfile = (option: IGlobalWindowItemProfile): IGlobalWindowItemProfile => {
	return Object.create({ ...option })
}
