import { TExtendKoaContext } from '@utypes/koa.types'
import * as profile from '../package.json'

export const electronAppBaseConfig = {
	initElectronAppTitle: profile.name,
}

export const baseServerCongfig = {
	host: `127.0.0.1`,
	port: 3501,
}

export const proxyURLConfig = {
	'/proxy-enter': async (ctx: TExtendKoaContext): Promise<string | boolean> => {
		return `https://www.baidu.com/`
	},
}

export const proxyBaseConfig = {
	errorTemplatePath: `../static/html/proxy-error.ejs`,
}
