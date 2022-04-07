import os from 'os'
import middleware from '../middleware'

const printSysInfo = () => {
	console.log('==>>> Computer Name: ' + os.hostname())
	console.log('==>>> CPU Architecture: ' + os.arch())
	console.log('==>>> User Name: ' + os.userInfo().username)
	console.log('==>>> User Root Directory: ' + os.userInfo().homedir)
	console.log('==>>> Temporary File Directory: ' + os.tmpdir())
	console.log('==>>> OS Type: ' + os.type())
	console.log('==>>> Operating System Platform: ' + os.platform())
	console.log('==>>> OS Version: ' + os.release())
	console.log('==>>> System Current Time: ' + os.uptime())
	console.log('==>>> Total System Memory: ' + (os.totalmem() / 1024 / 1024 / 1024).toFixed(1) + 'GB')
}

export default (app: any): void => {
	middleware(app)
	printSysInfo()
}
