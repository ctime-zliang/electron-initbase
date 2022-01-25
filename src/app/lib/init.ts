import { initElectronAppEvent } from '../modules/electronAppEvents/electronAppEvents'
import { registerAppProtocol } from '../modules/registerAppProtocol/registerAppProtocol'

export const initElectronApp = async (): Promise<void> => {
	registerAppProtocol()
	initElectronAppEvent()
}
