import { IExtendKoaContext } from '@utypes/koa.types'

/**
 * cookie 操作
 */
export const cookie = {
	set(ctx: IExtendKoaContext, key: string, value: string, option: { [key: string]: any } = {}): void {
		ctx.cookies.set(key, value, { ...option })
	},
	get(ctx: IExtendKoaContext, key: string): any {
		return ctx.cookies.get(key)
	},
}
