import { ProtocolResponse, session, protocol } from 'electron'

type TAppProcessor = (url: string, urlParams: any, updateData: any, callback: (res: string | ProtocolResponse) => void) => Promise<boolean>

export const initRegisterSchemesAsPrivileged = (): void => {
	protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { supportFetchAPI: true, stream: true } }])
}

/****************************** ******************************/
/****************************** ******************************/
/****************************** ******************************/

const appProcessors: Array<TAppProcessor> = []

appProcessors.push(async (url: string, urlParams, updateData, callback): Promise<any> => {
	const requestParmas: string = (updateData?.[0].bytes as Buffer).toString('utf-8')
	console.log(url, urlParams, requestParmas)
	callback(JSON.stringify({ ret: 0 }))
	return true
})

/*
	Electron Scheme 协议注册
 */
export const registerAppProtocol = (): void => {
	session.defaultSession.protocol.registerStringProtocol('app', async (request, callback): Promise<void> => {
		const m: Array<string> | null | undefined = /^([^?]+)\??(.*)$/i.exec(request.url)
		if (m) {
			const urlParams: any = {}
			m[2].split('&').forEach((item: string): void => {
				const v: Array<string> = item.split('=').map(decodeURIComponent)
				urlParams[v[0]] = v[1] || ''
			})
			for (let i: number = 0; i < appProcessors.length; i++) {
				const hasNext: boolean = await appProcessors[i](m[1], urlParams, request.uploadData, callback)
				if (!hasNext) {
					break
				}
			}
		}
	})
}
