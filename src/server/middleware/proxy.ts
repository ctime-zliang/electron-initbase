import koa from 'koa'
import { IExtendKoaContext, ProxyResponse } from '@utypes/koa.types'
import { proxyRequest } from '../utils/proxyRequest'
import errorRouter from '../router/error'

export default () => {
	return async (ctx: IExtendKoaContext, next: koa.Next): Promise<void | undefined> => {
		if (ctx.url.endsWith(`proxy-enter`) || ctx.url.endsWith(`proxy-enter/`)) {
			const remoteURL: string = 'https://juejins.cn/post/6844903573709389837' || ctx.url
			try {
				const proxyResponse: ProxyResponse = await proxyRequest(remoteURL)
				await next()
				ctx.body = proxyResponse.res
			} catch (e: any) {
				await errorRouter['500'](ctx)
				await next()
			}
			return
		}
		await next()
	}
}
