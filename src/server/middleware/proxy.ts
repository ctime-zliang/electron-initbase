import koa from 'koa'
import path from 'path'
import { IExtendKoaContext, ProxyResponse } from '@utypes/koa.types'
import { proxyRequest } from '../utils/proxyRequest'
import { renderTemplate, TRenderTemplateResponse } from '../utils/renderTemplate'
import { proxyBaseConfig, proxyURLConfig } from '@config/config'
import EventBus from '@utils/EventBus'

export default () => {
	return async (ctx: IExtendKoaContext, next: koa.Next): Promise<void | undefined> => {
		const checkesURLKeys = Object.keys(proxyURLConfig)
		let proxyURL: string | boolean = ''
		let urlIndex: number = 0
		for (; urlIndex < checkesURLKeys.length; urlIndex++) {
			const checkURL: string = checkesURLKeys[urlIndex]
			if (ctx.path.endsWith(checkURL) || ctx.path.endsWith(checkURL + '/')) {
				proxyURL = await (proxyURLConfig as { [key: string]: any })[checkURL](ctx)
				break
			}
		}
		if (proxyURL) {
			try {
				const proxyResponse: ProxyResponse = await proxyRequest(proxyURL as string)
				await next()
				ctx.body = proxyResponse.res
			} catch (e: any) {
				await next()
				const fullURL: string = `${ctx.protocol}://${ctx.host}${ctx.url}`
				const renderTemplateResponse: TRenderTemplateResponse = await renderTemplate(
					path.join(__dirname, proxyBaseConfig.errorTemplatePath),
					{
						sourceURL: fullURL,
						targetURL: proxyURL,
					}
				)
				ctx.body = renderTemplateResponse.content
				// ctx.body = ''
				// EventBus.emit('loadURL', { url: `${ctx.protocol}://${ctx.host}` })
			}
			return
		}
		await next()
	}
}
