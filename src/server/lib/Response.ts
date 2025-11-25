import { TExtendKoaContext } from '@/utypes/koa.types'
import koa from 'koa'
import httpStatus from './HttpStatus'

const TYPE_JSON: string = `json`
const TYPE_HTML: string = `html`
const TYPE_TEXT: string = `text`
const TYPE_BINARY: string = `binary`

class Response {
	private isSet: boolean
	private data: any
	private msg: string
	private status: number
	private retCode: number
	private outType: string
	constructor() {
		this.isSet = false
		this.data = null
		this.msg = ''
		this.status = 200
		this.retCode = 0
		this.outType = TYPE_JSON
	}

	hasSet() {
		return this.isSet
	}

	setStatus(status: number = 200): Response {
		this.isSet = true
		this.status = status
		return this
	}

	setRetCode(retCode: number = 0): Response {
		this.isSet = true
		this.retCode = retCode
		return this
	}

	setMessage(message: string): Response {
		this.isSet = true
		this.msg = message
		return this
	}

	flush(ctx: TExtendKoaContext): Response {
		switch (this.outType) {
			case TYPE_JSON: {
				if (this.status === httpStatus.Ok.status) {
					ctx.body = JSON.stringify({
						ret: this.retCode,
						msg: this.msg,
						data: this.data,
						time: Date.now(),
					})
					return this
				}
				ctx.status = this.status
				ctx.body = this.msg
				return this
			}
			case TYPE_HTML: {
				ctx.status = this.status
				ctx.body = this.data
				return this
			}
			case TYPE_TEXT: {
				ctx.status = this.status
				ctx.body = this.data
				return this
			}
			case TYPE_BINARY: {
				ctx.status = this.status
				ctx.body = this.data
				return this
			}
			default:
				{
					ctx.status = this.status
					ctx.body = this.data
				}
				return this
		}
	}

	/****************************** ******************************/
	/****************************** ******************************/

	setJson(data: any = null): Response {
		this.isSet = true
		this.outType = TYPE_JSON
		this.data = data
		return this
	}

	setHtml(data: any = null): Response {
		this.isSet = true
		this.outType = TYPE_HTML
		this.data = data
		return this
	}

	setBinary(data: any = null): Response {
		this.isSet = true
		this.outType = TYPE_BINARY
		this.data = data
		return this
	}

	setText(data: any = null): Response {
		this.isSet = true
		this.outType = TYPE_TEXT
		this.data = data
		return this
	}
}

export type TResponse = Response
export default Response
