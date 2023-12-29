import * as profile from '../package.json'

export const electronAppBaseConfig: { [key: string]: any } = {
	initElectronAppTitle: profile.name,
}

export const baseServerCongfig: { [key: string]: any } = {
	host: `127.0.0.1`,
	port: 3501,
}

export const enableProxyRemote: boolean = false
export const proxyRemoteBaseURL: string = `https://www.baidu.com/`
