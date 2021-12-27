import { ProtocolResponse, session } from 'electron'

type TAppProcessor = (url: string, params: any, data: any, callback: (res: string | ProtocolResponse) => void) => Promise<boolean>

const appProcessors: Array<TAppProcessor> = []

appProcessors.push(async (url: string, params, data, callback): Promise<any> => {
	const requestParmas = (data?.[0].bytes as Buffer).toString('utf-8')
	console.log(url, params, requestParmas)
	callback(JSON.stringify({ ret: 0 }))
	return true
})

export const registerAppProtocol = () => {
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
