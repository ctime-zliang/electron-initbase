import { electronAppRuntimeProfile } from '../../core/runtimeProfile'
import EventBus from '@utils/EventBus'
import { TGlobalWindowItemProfile } from '@utypes/electron.types'

/*
	用户事件监听
 */
export const addUserEvents = (): void => {
	EventBus.on('loadURL', (res: { url: string }): void => {
		const globalActiveWindowId: string | number | null = electronAppRuntimeProfile.globalActiveWindowId
		if (globalActiveWindowId && electronAppRuntimeProfile.globalWindowMap[globalActiveWindowId]) {
			const globalWindowItemProfile: TGlobalWindowItemProfile = electronAppRuntimeProfile.globalWindowMap[globalActiveWindowId]
			globalWindowItemProfile.win.loadURL(res.url)
		}
	})
}
