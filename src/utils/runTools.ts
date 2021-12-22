export const koaServerOnly = () => {
	return process.argv.includes('--koaserver-only=true')
}
