import { ProtocolResponse, session } from 'electron'

type TAppProcessor = (url: string, urlParams: any, updateData: any, callback: (res: string | ProtocolResponse) => void) => Promise<boolean>

const appProcessors: Array<TAppProcessor> = []

appProcessors.push(async (url: string, urlParams, updateData, callback): Promise<any> => {
	const requestParmas = (updateData?.[0].bytes as Buffer).toString('utf-8')
	console.log(url, urlParams, requestParmas)
	callback(JSON.stringify({ ret: 0 }))
	return true
})

export const registerAppProtocol = (): void => {
	session.defaultSession.protocol.registerStringProtocol('app', async (request, callback) => {
		const m = /^([^?]+)\??(.*)$/i.exec(request.url)
		if (m) {
			const urlParams: any = {}
			m[2].split('&').forEach((item: string) => {
				const v: Array<string> = item.split('=').map(decodeURIComponent)
				urlParams[v[0]] = v[1] || ''
			})
			for (let i = 0; i < appProcessors.length; i++) {
				const hasNext: boolean = await appProcessors[i](m[1], urlParams, request.uploadData, callback)
				if (!hasNext) {
					break
				}
			}
		}
	})
}