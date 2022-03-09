import { TGlobalWindowItemProfile } from '@utypes/electron.types'

export const createElectronAppRuntimeProfile = (option: TGlobalWindowItemProfile): TGlobalWindowItemProfile => {
	return Object.create({ ...option })
}
