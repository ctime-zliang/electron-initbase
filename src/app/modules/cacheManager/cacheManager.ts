import { session } from 'electron'
import { TSchemesCommonResponse } from '@/utypes/electron.types'

export type TCacheSizeResponse = {
	cacheSize: number
}

export type TClearCacheRequestParams = {
	tempFiles: boolean
	cookies: boolean
	indexedDB: boolean
	localStorage: boolean
}

export const getCacheSize = async (): Promise<TCacheSizeResponse> => {
	try {
		const cacheSize = await session.defaultSession.getCacheSize()
		return { cacheSize }
	} catch (e) {
		return { cacheSize: 0 }
	}
}

const localCacheItems: Array<string> = [`shadercache`, `websql`, `serviceworkers`, `cachestorage`]
export const clearCache = async (params: TClearCacheRequestParams): Promise<TSchemesCommonResponse> => {
	const tasks: Array<Promise<void>> = []
	const items: Array<string> = []
	if (params.tempFiles) {
		items.push(`appcache`)
		items.push(`filesystem`)
	}
	if (params.cookies) {
		items.push(`cookies`)
	}
	if (params.indexedDB) {
		items.push(`indexdb`)
	}
	if (params.localStorage) {
		items.push(`localStorage`)
	}

	if (params.tempFiles) {
		tasks.push(session.defaultSession.clearCache())
	}

	if (items.length) {
		const clearOptions: {
			storages: Array<string>
			quotas: Array<string>
		} = {
			storages: ([] as Array<string>).concat(items, localCacheItems),
			quotas: [`temporary`, `persisten`, `syncable`],
		}
		tasks.push(session.defaultSession.clearStorageData(clearOptions))
	}

	try {
		await Promise.all(tasks)
		return { success: true }
	} catch (e: any) {
		console.log(e)
		return { success: false }
	}
}
