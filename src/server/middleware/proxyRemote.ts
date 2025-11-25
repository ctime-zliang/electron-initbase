import koa from 'koa'
import { TExtendKoaContext, ProxyResponse } from '@utypes/koa.types'
import { proxyRequest } from '../utils/proxyRequest'
import { enableProxyRemote, proxyRemoteBaseURL } from '@config/config'

export function proxyRemote() {
	return async (ctx: TExtendKoaContext, next: koa.Next): Promise<void | undefined> => {
		if (enableProxyRemote && proxyRemoteBaseURL) {
			try {
				const localFullUrl: string = `${ctx.protocol}://${ctx.host}${ctx.url}`.replace(/\/$/i, '')
				const proxyAssetsUrl: string = `${proxyRemoteBaseURL}${localFullUrl.replace(/^(http|https):\/\/[^/]+/, '')}`
				const proxyResponse: ProxyResponse = await proxyRequest(proxyAssetsUrl as string)
				await next()
				ctx.status = 200
				ctx.body = proxyResponse.content
			} catch (e: any) {
				await next()
				const localFullUrl: string = `${ctx.protocol}://${ctx.host}${ctx.url}`
				ctx.status = 200
				ctx.body = `proxy request error: ${localFullUrl}`
				// ctx.body = ''
				// EventBus.emit('loadURL', { url: `${ctx.protocol}://${ctx.host}` })
			}
			return
		}
		await next()
	}
}
