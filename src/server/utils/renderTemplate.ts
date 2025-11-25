import ejs from 'ejs'
import fs from 'fs'

export type TRenderTemplateResponse = {
	ret: number
	content: string
	error?: any
}
export const renderTemplate = async (templatePath: string, data: any = {}): Promise<TRenderTemplateResponse> => {
	return new Promise((_: (a: any) => void): void => {
		// ejs.renderFile(templatePath, data, (error: any, data: any): void => {
		// 	if (error) {
		// 		console.log(error)
		// 		_({ ret: -1, content: `Render Template Error. ${error}`, error })
		// 		return
		// 	}
		// 	_({ ret: 0, content: data, error: null })
		// })
		fs.readFile(templatePath, 'utf8', (error: any, data: any): void => {
			if (error) {
				console.log(error)
				_({ ret: -1, content: `Render Template Error. ${error}`, error })
				return
			}
			_({ ret: 0, content: data, error: null })
		})
	})
}
