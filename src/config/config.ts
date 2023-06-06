import { TExtendKoaContext } from '@utypes/koa.types'
import * as profile from '../package.json'

export const electronAppBaseConfig: { [key: string]: any } = {
	initElectronAppTitle: profile.name,
}

export const baseServerCongfig: { [key: string]: any } = {
	host: `127.0.0.1`,
	port: 3501,
}

export const proxyURL: string = `https://www.baidu.com/`

export const proxyBaseConfig: { [key: string]: any } = {
	errorTemplatePath: `../static/html/proxy-error.ejs`,
}
