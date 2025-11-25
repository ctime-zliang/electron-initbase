import events from 'events'
import koa from 'koa'

const _eventEmitter = new events.EventEmitter()

global.eventEmitter = _eventEmitter

export const eventInit = (app: koa): void => {
	eventEmitter.on('app/common', (res: any): void => {
		console.log(res)
	})
}

export const eventEmitter = _eventEmitter
