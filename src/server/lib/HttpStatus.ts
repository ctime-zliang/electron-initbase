export default {
	Ok: {
		status: 200,
		message: 'Ok',
	},
	NoContent: {
		status: 204,
		message: 'Now. No Content',
	},
	BadRequest: {
		status: 400,
		message: 'Now. Bad Request',
	},
	Unauthorized: {
		status: 401,
		message: 'Now. Unauthorized',
	},
	Forbidden: {
		status: 403,
		message: 'Now. Forbidden',
	},
	NotFound: {
		status: 404,
		message: 'Now. Not Found',
	},
	ServerError: {
		status: 500,
		message: 'Now. Server Error',
	},
	NotImplemented: {
		status: 501,
		message: 'Now. Not Implemented',
	},
	/* 抛出异常 */
	throwError(status: any, error: Error | any): void {
		const err: Error | any = error instanceof Error ? error : new Error(error.toString())
		err.status = status
		throw err
	},
}
