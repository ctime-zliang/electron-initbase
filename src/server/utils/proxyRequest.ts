import http from 'http'
import https from 'https'
import { ProxyResponse } from '@utypes/koa.types'
import { StringDecoder } from 'string_decoder'

const httpUserAgent = new http.Agent({ keepAlive: true })
const httpsUserAgent = new https.Agent({ keepAlive: true })

const uBuffer = (res: http.IncomingMessage) => {
	return async (): Promise<Buffer> => {
		return new Promise((_: (a: Buffer) => void): void => {
			const reply: Array<Buffer> = []
			res.on('data', (chunk: any): void => {
				reply.push(chunk)
			})
			res.on('end', () => {
				_(Buffer.concat(reply))
			})
		})
	}
}
const uArrayBuffer = (res: http.IncomingMessage) => {
	return async (): Promise<ArrayBuffer> => {
		return new Promise((_: (a: any) => void): void => {
			const reply: Array<Buffer> = []
			res.on('data', (chunk: any): void => {
				reply.push(chunk)
			})
			res.on('end', () => {
				_(Buffer.concat(reply).buffer)
			})
		})
	}
}
const uText = (res: http.IncomingMessage) => {
	return async (): Promise<string> => {
		const textDecoder: StringDecoder = new StringDecoder('utf-8')
		return new Promise((_: (a: string) => void): void => {
			const reply: Array<string> = []
			res.on('data', (chunk: any): void => {
				reply.push(textDecoder.write(chunk))
			})
			res.on('end', () => {
				reply.push(textDecoder.end())
				const text: string = reply.join('')
				_(text)
			})
		})
	}
}
const uJson = (res: http.IncomingMessage) => {
	return async (): Promise<any> => {
		const textHandler = uText(res)
		const textResult: string = await textHandler()
		try {
			return JSON.parse(textResult)
		} catch (e) {
			return null
		}
	}
}

export const proxyRequest = async (url: string, option: { [key: string]: any } = {}): Promise<ProxyResponse> => {
	return new Promise(async (resolve, reject) => {
		const client: any = url.startsWith('https') ? https : http
		const userAgent: any = url.startsWith('https') ? httpsUserAgent : httpUserAgent

		const requestOption: { [key: string]: any } = {
			body: null,
			...option,
			method: (option.method || 'get').toUpperCase(),
			agent: userAgent,
		}

		const req: any = client.request(url, requestOption, (res: http.IncomingMessage) => {
			let data = ''
			res.on('error', (err: any) => {
				reject({
					url,
					res: null,
					remote: err,
				})
			})
			res.on('data', chunk => {
				data += chunk
			})
			res.on('end', () => {
				resolve({
					content: data,
					status: res.statusCode,
					statusText: res.statusMessage,
					url,
					headers: {
						get(key: string) {
							return res.headers[key]
						},
					},
					res,
					remote: null,
					buffer: uBuffer(res),
					arrayBuffer: uArrayBuffer(res),
					text: uText(res),
					json: uJson(res),
				})
			})
			// console.log(`+++++++++++++++++++++++++++++++`)
			// console.log(res)
			// resolve({
			// 	status: res.statusCode,
			// 	statusText: res.statusMessage,
			// 	url,
			// 	headers: {
			// 		get(key: string) {
			// 			return res.headers[key]
			// 		},
			// 	},
			// 	res,
			// 	remote: null,
			// 	buffer: uBuffer(res),
			// 	arrayBuffer: uArrayBuffer(res),
			// 	text: uText(res),
			// 	json: uJson(res),
			// })
		})
		req.on('error', (err: any): void => {
			reject({
				url,
				res: null,
				remote: err,
			})
		})
		if (requestOption.body) {
			req.write(requestOption.body)
		}
		req.end()
	})
}
