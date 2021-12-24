import koa from 'koa'

export type TKoaRouter = {
	method: TRouterMethod
	path: string
	action: (...args: Array<any>) => Promise<any>
	desc?: string
	before?: (ctx?: IExtendKoaContext, netx?: koa.Next) => Promise<boolean>
	after?: (ctx?: IExtendKoaContext, netx?: koa.Next) => Promise<any>
}

export type TRouterMethod = 'get' | 'post' | 'put'

export interface IExtendKoaContext extends koa.Context {
	routerMatched?: boolean
}

export interface IKoaServerResult {
	app: koa
	hostname: string
	port: number
}

export type ProxyResponse = {
	readonly headers?: {
		get: (key: string) => string | string[] | null | undefined
		set?: (key: string, value: string) => void
	}
	readonly status?: number
	readonly statusText?: string
	readonly url: string
	readonly res: any
	readonly remote?: any
	readonly buffer: () => Promise<Buffer>
	readonly arrayBuffer: () => Promise<ArrayBuffer>
	readonly json: () => Promise<any>
	readonly text: () => Promise<string>
}
