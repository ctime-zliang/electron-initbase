import { IExtendKoaContext } from '@utypes/koa.types'

export const electronAppBaseConfig = {
	initElectronAppTitle: `Electron App`,
}

export const baseServerCongfig = {
	host: `127.0.0.1`,
	port: 3501,
}

export const proxyURLConfig = {
	'proxy-enter': async (ctx: IExtendKoaContext): Promise<string | boolean> => {
		return `https://www.baidu.com/`
	},
}

export const proxyBaseConfig = {
	errorTemplatePath: `../static/html/proxy-error.ejs`,
}
