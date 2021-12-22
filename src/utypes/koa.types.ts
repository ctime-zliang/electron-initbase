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
