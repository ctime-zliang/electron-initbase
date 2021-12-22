import { formatDates } from './utils'

const TYPE = {
	TRACE: 'TRACE',
	ERROR: 'ERROR',
	INFO: 'INFO',
}

const write = (type: string, message: any, ucolor: string = ''): void => {
	let color = `[34m`
	if (type == TYPE.TRACE) {
		color = color.indexOf('[34m') > -1 ? `[35m` : `[34m`
		ucolor = color
	}
	console.log(`\x1b${ucolor}${formatDates()} [${type}] ${message}\x1b${ucolor}`)
}
const error = (action: string, message: string = ''): void => {
	write(TYPE.ERROR, `[${action}][${typeof message == 'object' ? JSON.stringify(message) : message}]`, `[31m`)
}
const trace = (action: string, message: string = ''): void => {
	write(TYPE.TRACE, `[${action}][${typeof message == 'object' ? JSON.stringify(message) : message}]`)
}
const log = (...args: Array<any>) => {
	console.log(...args)
}

export default {
	error,
	trace,
	log,
}
