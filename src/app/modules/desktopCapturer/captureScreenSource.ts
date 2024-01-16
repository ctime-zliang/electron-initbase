import { BrowserWindow, desktopCapturer } from 'electron'
import { electronAppRuntimeProfile } from '@/app/core/runtimeProfile'
import { TGlobalWindowItemProfile } from '@/utypes/electron.types'

export const captureScreenSource = async (): Promise<void> => {
	const activeWindowId: string = electronAppRuntimeProfile.globalActiveWindowId as string
	const winProfile: TGlobalWindowItemProfile = electronAppRuntimeProfile.globalWindowMap[activeWindowId]
	const sources: Array<Electron.DesktopCapturerSource> = await desktopCapturer.getSources({ types: ['window', 'screen'] })
	for (const source of sources) {
		if (source.name === 'Entire Screen') {
			winProfile.capturedScreenSourceId = source.id
			return
		}
	}
}
