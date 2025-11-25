declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: 'development' | 'production' | 'test'
		PUBLIC_URL: string
		SOURCE_LANGUAGE: 'string'
	}
}

declare module '*.json'

declare module '*.bmp' {
	const src: string
	export default src
}

declare module '*.gif' {
	const src: string
	export default src
}

declare module '*.jpg' {
	const src: string
	export default src
}

declare module '*.jpeg' {
	const src: string
	export default src
}

declare module '*.png' {
	const src: string
	export default src
}

declare module '*.webp' {
	const src: string
	export default src
}

declare module '*.svg' {
	import * as React from 'react'

	export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>

	const src: string
	export default src
}

declare module '*.css' {
	const content: { [className: string]: string }
	export = content
}

declare module '*.module.css' {
	const content: { [className: string]: string }
	export = content
}

declare module '*.module.less' {
	const content: { [className: string]: string }
	export = content
}

interface Window {
	browserHistory: any
	store: any
	__PRELOADED_STATE__: any
	__PRELOADED_RESULT__: any
	__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
}

declare module 'express-manifest-helpers'
declare module 'react-router-config'
declare module 'request'
declare module 'window'
declare module 'mockjs'
declare global {
	var app: any
	var eventEmitter: any
}
export {}
