import koa from 'koa'
import path from 'path'
import { TExtendKoaContext, ProxyResponse } from '@utypes/koa.types'
import { proxyRequest } from '../utils/proxyRequest'
import { renderTemplate, TRenderTemplateResponse } from '../utils/renderTemplate'
import { proxyBaseConfig, proxyURL } from '@config/config'

export default () => {
	return async (ctx: TExtendKoaContext, next: koa.Next): Promise<void | undefined> => {
		if (proxyURL) {
			try {
				const localFullUrl: string = `${ctx.protocol}://${ctx.host}${ctx.url}`
				const proxyAssetsUrl: string = `${proxyURL}${localFullUrl.replace(/^(http|https):\/\/[^/]+/, '')}`
				const proxyResponse: ProxyResponse = await proxyRequest(proxyAssetsUrl as string)
				await next()
				ctx.status = 200
				ctx.body = proxyResponse.res
			} catch (e: any) {
				await next()
				const localFullUrl: string = `${ctx.protocol}://${ctx.host}${ctx.url}`
				const renderTemplateResponse: TRenderTemplateResponse = await renderTemplate(
					path.join(__dirname, proxyBaseConfig.errorTemplatePath),
					{
						sourceURL: localFullUrl,
						targetURL: proxyURL,
					}
				)
				ctx.status = 200
				ctx.body = renderTemplateResponse.content
				// ctx.body = ''
				// EventBus.emit('loadURL', { url: `${ctx.protocol}://${ctx.host}` })
			}
			return
		}
		await next()
	}
}
