import { TExtendKoaContext } from '@utypes/koa.types'

/**
 * cookie 操作
 */
export const cookie = {
	set(ctx: TExtendKoaContext, key: string, value: string, option: { [key: string]: any } = {}): void {
		ctx.cookies.set(key, value, { ...option })
	},
	get(ctx: TExtendKoaContext, key: string): string | void {
		return ctx.cookies.get(key)
	},
}
