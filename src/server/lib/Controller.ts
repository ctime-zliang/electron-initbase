import EventEmitter from 'events'
import Response, { TResponse } from './Response'
import httpStatus from './HttpStatus'
import { IExtendKoaContext } from '@utypes/koa.types'

interface _TBaseController extends Controller {
	render?: (ctx: IExtendKoaContext) => any
	[key: string]: any
}

class Controller extends EventEmitter {
	private options: { [key: string]: any } = {}
	constructor(options: { [key: string]: any } = {}) {
		super()
	}

	invokeRender() {
		return async (ctx: IExtendKoaContext): Promise<void> => {
			const render = (this as _TBaseController).render
			if (!render) {
				ctx.body = `Missing render method in Controller!!!`
				ctx.status = 500
				return
			}
			await render.call(this, ctx)
		}
	}

	invokeAction(actionName: string) {
		const func: any = (this as _TBaseController)[actionName]
		if (typeof func !== 'function') {
			throw new ReferenceError(`${actionName} action non-existent.`)
		}
		return async (ctx: IExtendKoaContext): Promise<void> => {
			ctx.controller = { ...this.options, actionName }
			const res: TResponse = new Response()
			try {
				res.setStatus(httpStatus.Ok.status).setMessage('').setRetCode(0).setJson(null)
				await func.call(this, ctx, res)
				res.flush(ctx)
			} catch (e: any) {
				res.setStatus(httpStatus.ServerError.status).setMessage(httpStatus.ServerError.message).flush(ctx)
				ctx.app.emit('error', e)
			}
		}
	}
}

export type TController = Controller
export default Controller
