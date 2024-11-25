import koa from 'koa'
import { TExtendKoaContext } from '@utypes/koa.types'
import { renderTemplate, TRenderTemplateResponse } from '../utils/renderTemplate'
import path from 'path'
import { enableProxyRemote } from '@/config/config'

const proxyLocaleBaseURL: string = `../static/webCanvas/`
const proxyLocaleDefaultIndexURL: string = `/index.html`

export function proxyWebCanvas() {
	return async (ctx: TExtendKoaContext, next: koa.Next): Promise<void | undefined> => {
		if (enableProxyRemote) {
			await next()
			return
		}
		try {
			let requestUrl: string = ctx.url
			if (requestUrl === '/') {
				requestUrl = proxyLocaleDefaultIndexURL
			}
			if (requestUrl.startsWith('/canvas')) {
				if (requestUrl === '/canvas') {
					requestUrl = requestUrl + proxyLocaleDefaultIndexURL
				}
			}
			const renderTemplateResponse: TRenderTemplateResponse = await renderTemplate(path.join(__dirname, proxyLocaleBaseURL + requestUrl), {})
			await next()
			ctx.status = 200
			ctx.body = renderTemplateResponse.content
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
}
