import { electronAppRuntimeProfile } from '../../core/runtimeProfile'
import EventBus from '@utils/EventBus'
import { IGlobalWindowItemProfile } from '@/utypes/electron.types'

export const addUserEvent = () => {
	EventBus.on('loadURL', (res: { url: string }) => {
		const globalActiveWindowId: string | number | null = electronAppRuntimeProfile.globalActiveWindowId
		if (globalActiveWindowId && electronAppRuntimeProfile.globalWindowMap[globalActiveWindowId]) {
			const globalWindowItemProfile: IGlobalWindowItemProfile = electronAppRuntimeProfile.globalWindowMap[globalActiveWindowId]
			globalWindowItemProfile.win.loadURL(res.url)
		}
	})
}
