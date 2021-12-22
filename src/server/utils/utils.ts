import { IExtendKoaContext } from '@utypes/koa.types'

/**
 * 设置 cookie
 * @param {object} ctx KoaApp 实例对象
 * @param {string} key 设置的键名
 * @param {string} value 设置的键值
 * @param {object} option 可选的参数
 * @return {undefined}
 */
export const setCookie = (ctx: IExtendKoaContext, key: string, value: string, option: { [key: string]: any } = {}): void => {
	ctx.cookies.set(key, value, { ...option })
}

/**
 * cookie 操作
 */
export const cookie = {
	set(ctx: IExtendKoaContext, key: string, value: string, option: { [key: string]: any } = {}): void {
		const opt = {
			httpOnly: false,
			...option,
		}
		ctx.cookies.set(key, value, opt)
	},
	get(ctx: IExtendKoaContext, key: string): any {
		return ctx.cookies.get(key)
	},
}
