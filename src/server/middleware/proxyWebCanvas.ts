import koa from 'koa'
import fs from 'fs'
import { TExtendKoaContext } from '@utypes/koa.types'
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
			let requestUrl: string = ctx.url!
			if (requestUrl === '/') {
				requestUrl = proxyLocaleDefaultIndexURL
			}
			if (requestUrl.startsWith('/canvas')) {
				if (requestUrl === '/canvas') {
					requestUrl = requestUrl + proxyLocaleDefaultIndexURL
				}
			}
			const filePath: string = path.join(__dirname, proxyLocaleBaseURL + requestUrl)
			const fileContent: Buffer = fs.readFileSync(filePath)
			const fileType = requestUrl.split('.').pop()!.toLowerCase()
			switch (fileType) {
				case 'css': {
					ctx.response.set({
						'Content-Type': `text/css`,
					})
					break
				}
				case 'js': {
					ctx.response.set({
						'Content-Type': `application/javascript`,
					})
					break
				}
				case 'json': {
					ctx.response.set({
						'Content-Type': `application/json`,
					})
					break
				}
				case 'pdf': {
					ctx.response.set({
						'Content-Type': `application/pdf`,
					})
					break
				}
				case 'xml': {
					ctx.response.set({
						'Content-Type': `application/xml`,
					})
					break
				}
				case 'zip': {
					ctx.response.set({
						'Content-Type': `application/zip`,
					})
					break
				}
				case 'gzip': {
					ctx.response.set({
						'Content-Type': `application/gzip`,
					})
					break
				}
				case 'dwg': {
					ctx.response.set({
						'Content-Type': `application/x-dwg`,
					})
					break
				}
				case 'jpg':
				case 'jpeg': {
					ctx.response.set({
						'Content-Type': `image/jpeg`,
					})
					break
				}
				case 'png': {
					ctx.response.set({
						'Content-Type': `image/png`,
					})
					break
				}
				case 'gif': {
					ctx.response.set({
						'Content-Type': `image/gif`,
					})
					break
				}
				case 'svg': {
					ctx.response.set({
						'Content-Type': `image/svg+xml`,
					})
					break
				}
				case 'webp': {
					ctx.response.set({
						'Content-Type': `image/webp`,
					})
					break
				}
				case 'mp3': {
					ctx.response.set({
						'Content-Type': `audio/mpeg`,
					})
					break
				}
				case 'wav': {
					ctx.response.set({
						'Content-Type': `audio/wav`,
					})
					break
				}
				case 'ogg': {
					ctx.response.set({
						'Content-Type': `audio/ogg`,
					})
					break
				}
				case 'mp4': {
					ctx.response.set({
						'Content-Type': `video/mp4`,
					})
					break
				}
				case 'mov': {
					ctx.response.set({
						'Content-Type': `video/quicktime`,
					})
					break
				}
				case 'avi': {
					ctx.response.set({
						'Content-Type': `video/x-msvideo`,
					})
					break
				}
				case 'mkv': {
					ctx.response.set({
						'Content-Type': `video/x-matroska`,
					})
					break
				}
				case 'txt': {
					ctx.response.set({
						'Content-Type': `text/plain`,
					})
					break
				}
				case 'html': {
					ctx.response.set({
						'Content-Type': `text/html`,
					})
					break
				}
				case 'ico': {
					ctx.response.set({
						'Content-Type': `image/x-icon`,
					})
					break
				}
				case 'csv': {
					ctx.response.set({
						'Content-Type': `text/csv`,
					})
					break
				}
				case 'md': {
					ctx.response.set({
						'Content-Type': `text/markdown`,
					})
					break
				}
				case 'xls': {
					ctx.response.set({
						'Content-Type': `application/vnd.ms-excel`,
					})
					break
				}
				case 'xlsx': {
					ctx.response.set({
						'Content-Type': `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`,
					})
					break
				}
				case 'doc': {
					ctx.response.set({
						'Content-Type': `application/msword`,
					})
					break
				}
				case 'docx': {
					ctx.response.set({
						'Content-Type': `application/vnd.openxmlformats-officedocument.wordprocessingml.document`,
					})
					break
				}
				case 'ppt': {
					ctx.response.set({
						'Content-Type': `application/vnd.ms-powerpoint`,
					})
					break
				}
				case 'pptx': {
					ctx.response.set({
						'Content-Type': `application/vnd.openxmlformats-officedocument.presentationml.presentation`,
					})
					break
				}
				case 'eot': {
					ctx.response.set({
						'Content-Type': `application/vnd.ms-fontobject`,
					})
					break
				}
				case 'ttf': {
					ctx.response.set({
						'Content-Type': `font/ttf`,
					})
					break
				}
				case 'woff': {
					ctx.response.set({
						'Content-Type': `font/woff`,
					})
					break
				}
				case 'woff2': {
					ctx.response.set({
						'Content-Type': `font/woff2`,
					})
					break
				}
				case 'otf': {
					ctx.response.set({
						'Content-Type': `font/otf`,
					})
					break
				}
				default: {
				}
			}
			await next()
			ctx.status = 200
			ctx.body = fileContent
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
