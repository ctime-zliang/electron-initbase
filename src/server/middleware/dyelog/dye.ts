import { TExtendKoaContext } from '@utypes/koa.types'

const MAX_LENGTH: number = 9900
const SPLIT_LINE: string = `>>> ==================================================`
const PREFIX_TAG: string = `DYE_KOALOG|`
const zeroize = (num: number, width: number): string => {
	const s = String(num)
	const len = s.length
	return len >= width ? s : '000000'.slice(len - width) + s
}
const getTime = (): string => {
	let now = new Date()
	let HH = zeroize(now.getHours(), 2)
	let mm = zeroize(now.getMinutes(), 2)
	let ss = zeroize(now.getSeconds(), 2)
	let msec = zeroize(now.getTime() % 1000, 3)
	return HH + ':' + mm + ':' + ss + ' ' + msec
}
const substring = (body: string): string => {
	return (body || '').substr(0, MAX_LENGTH)
}
const trim = (string: string = ''): string => {
	if (String.prototype.trim) {
		return String.prototype.trim.call(string)
	}
	return string.replace(/(^\s*)|(\s*$)/g, '')
}

const debug = (ctx: TExtendKoaContext, msg: any): void => {
	msg = getTime() + '|DEBUG|' + msg(this as any).log('debug', ctx, msg)
}
const info = (ctx: TExtendKoaContext, msg: any): void => {
	msg = getTime() + '|INFO|' + msg(this as any).log('info', ctx, msg)
}
const warn = (ctx: TExtendKoaContext, msg: any): void => {
	msg = getTime() + '|WARN|' + msg(this as any).log('warn', ctx, msg)
}
const error = (ctx: TExtendKoaContext, msg: any): void => {
	msg = getTime() + '|ERROR|' + msg(this as any).log('error', ctx, msg)
}
const log = (type: string, ctx: TExtendKoaContext, msg: any): void => {
	msg = type + '|' + msg
	if (ctx && ctx.request && !ctx._logs) {
		ctx._logs = []
		ctx._logs.push(msg)
	} else if (ctx.request && ctx._logs) {
		ctx._logs.push(msg)
	}
}
const handleDyeLog = (ctx: TExtendKoaContext, debug: boolean = true): void => {
	ctx._logs = ctx._logs || []

	/* ... */
	const header: Array<string> = []
	if (ctx.request) {
		header.push('request url: ' + `${ctx.request.protocol}://${ctx.request.host}${ctx.request.url}`)
		const headerObj: { [key: string]: any } = {}
		Object.keys(ctx.request.headers).forEach((item, index) => {
			headerObj[item] = ctx.request.headers[item] || ''
		})
		header.push('request headers: ' + JSON.stringify(headerObj))
		if (ctx.request.method.toUpperCase() == 'POST' && ((ctx.request || {}) as any)?.body) {
			header.push('request body: ' + JSON.stringify(((ctx.request || {}) as any)?.body))
		}
	}
	ctx._logs.unshift(header)
	ctx._logs.unshift(SPLIT_LINE)

	/* ... */
	const footer: Array<string> = []
	const body: string = String(ctx.response.body || '')
	footer.push('response body: ' + trim(body.replace(/[\n]/g, '')))
	ctx._logs.push(footer)

	/* ... */
	const logsText: string = substring(PREFIX_TAG + ctx._logs.join('\n'))
	if (debug) {
		console.log(logsText)
	}

	/* ... */
	delete ctx._logs
}

export default {
	handleDyeLog,
	debug,
	info,
	warn,
	error,
	log,
}
