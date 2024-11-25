import koa from 'koa'

export type TKoaRouter = {
	method: TRouterMethod
	path: string
	action: (...args: Array<any>) => Promise<any>
	desc?: string
	before?: (ctx?: TExtendKoaContext, netx?: koa.Next) => Promise<boolean>
	after?: (ctx?: TExtendKoaContext, netx?: koa.Next) => Promise<any>
}

export type TRouterMethod = 'get' | 'post' | 'put'

export type TExtendKoaContext = {
	routerMatched?: boolean
	render: (url: string, options: { [key: string]: any }) => void
} & koa.Context

export type TKoaServerResult = {
	app: koa
	hostname: string
	port: number
}

export type ProxyResponse = {
	readonly headers?: {
		get: (key: string) => string | string[] | null | undefined
		set?: (key: string, value: string) => void
	}
	readonly content: string
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
