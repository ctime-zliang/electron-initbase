import os from 'os'
import middleware from '../middleware'

export default (app: any): void => {
	middleware(app)
	/* ... */
	console.log('$$$ Computer Name: ' + os.hostname())
	console.log('$$$ CPU Architecture: ' + os.arch())
	console.log('$$$ User Name: ' + os.userInfo().username)
	console.log('$$$ User Root Path: ' + os.userInfo().homedir)
	console.log('$$$ Temporary File Path: ' + os.tmpdir())
	console.log('$$$ OS Type: ' + os.type())
	console.log('$$$ OS Platform: ' + os.platform())
	console.log('$$$ OS Vserion: ' + os.release())
	console.log('$$$ System Current Time: ' + os.uptime())
	console.log('$$$ Total System Memory: ' + (os.totalmem() / 1024 / 1024 / 1024).toFixed(1) + 'GB')
}
