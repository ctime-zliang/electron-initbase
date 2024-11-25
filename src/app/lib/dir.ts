import fs from 'fs'
import { APP_BASE_DIR, APP_CONFIG_DIR, APP_DATA_DIR, APP_RUN_LOG } from '@config/dirConfig'
import { formatDates, mkdirSync } from '@utils/utils'
import simpleLogger from '@utils/simpleLogger'

export const initAppDir = (): void => {
	try {
		mkdirSync(APP_BASE_DIR)
		mkdirSync(APP_CONFIG_DIR)
		mkdirSync(APP_DATA_DIR)
		/* ... */
		writeInRunLog()
	} catch (e: any) {
		simpleLogger.error(`Init Dir Error.`)
		console.log(e)
	}
}

export const writeInRunLog = (): void => {
	if (!fs.existsSync(APP_RUN_LOG)) {
		fs.writeFileSync(APP_RUN_LOG, Buffer.from('', 'utf-8'))
	}
	const oldContent: string = fs.readFileSync(APP_RUN_LOG, { encoding: 'utf-8' })
	const newContent: string = `setup-time: ${formatDates()}`
	fs.writeFileSync(APP_RUN_LOG, oldContent + newContent + '\r\n')
}
