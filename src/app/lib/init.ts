import { initElectronAppEvent } from '../modules/electronAppEvents/electronAppEvents'
import { registerAppProtocol } from '../modules/registerAppProtocol/registerAppProtocol'
import { initAppDir } from './dir'

export const initElectronApp = async (): Promise<void> => {
	initAppDir()
	registerAppProtocol()
	initElectronAppEvent()
}
