export const koaServerOnly = (): boolean => {
	return process.argv.includes('--koaserver-only=true')
}
