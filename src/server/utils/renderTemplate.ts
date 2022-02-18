import ejs from 'ejs'

export type TRenderTemplateResponse = {
	ret: number
	content: string
	error?: any
}
export const renderTemplate = async (templatePath: string, data: any = {}): Promise<TRenderTemplateResponse> => {
	return new Promise(resolve => {
		ejs.renderFile(templatePath, data, (error: any, data: any): void => {
			if (error) {
				resolve({ ret: -1, content: `Render Template Error.`, error })
				return
			}
			resolve({ ret: 0, content: data, error: null })
		})
	})
}
