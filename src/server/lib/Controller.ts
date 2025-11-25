import EventEmitter from 'events'
import Response, { TResponse } from './Response'
import httpStatus from './HttpStatus'
import { TExtendKoaContext } from '@utypes/koa.types'

type TBaseController = {
	render?: (ctx: TExtendKoaContext, res: Response) => any
	[key: string]: any
} & Controller

class Controller extends EventEmitter {
	private options: { [key: string]: any } = {}
	constructor(options: { [key: string]: any } = {}) {
		super()
	}

	invokeRender() {
		return async (ctx: TExtendKoaContext): Promise<void> => {
			const render = (this as TBaseController).render
			const res: TResponse = new Response()
			if (!render) {
				ctx.body = `Missing render method in Controller!!!`
				ctx.status = 500
				return
			}
			await render.call(this, ctx, res)
			res.hasSet() && res.flush(ctx)
		}
	}

	invokeAction(actionName: string) {
		const func: (a: TExtendKoaContext, b: TResponse) => Promise<void> = (this as TBaseController)[actionName]
		if (typeof func !== 'function') {
			throw new ReferenceError(`${actionName} action non-existent.`)
		}
		return async (ctx: TExtendKoaContext): Promise<void> => {
			ctx.controller = { ...this.options, actionName }
			const res: TResponse = new Response()
			try {
				res.setStatus(httpStatus.Ok.status).setMessage('').setRetCode(0).setJson(null)
				await func.call(this, ctx, res)
				res.hasSet() && res.flush(ctx)
			} catch (e: any) {
				res.setStatus(httpStatus.ServerError.status).setMessage(httpStatus.ServerError.message).flush(ctx)
				ctx.app.emit('error', e)
			}
		}
	}
}

export type TController = Controller
export default Controller

export const invokeRender = (controller: any): ((ctx: TExtendKoaContext) => Promise<void>) => {
	return new controller().invokeRender()
}
export const invokeAction = (controller: any, method: string): ((ctx: TExtendKoaContext) => Promise<void>) => {
	return new controller().invokeAction(method)
}
