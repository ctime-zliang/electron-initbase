export const serverOnly = (): boolean => {
	return process.argv.includes('--server-only=true')
}
