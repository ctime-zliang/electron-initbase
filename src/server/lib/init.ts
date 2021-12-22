import os from 'os'
import middleware from '../middleware'

export default (app: any): void => {
	middleware(app)
	/* ... */
	console.log('计算机名称：' + os.hostname())
	console.log('CPU 架构：' + os.arch())
	console.log('用户名称：' + os.userInfo().username)
	console.log('用户根目录：' + os.userInfo().homedir)
	console.log('临时文件目录：' + os.tmpdir())
	console.log('操作系统类型：' + os.type())
	console.log('操作系统平台：' + os.platform())
	console.log('操作系统版本号：' + os.release())
	console.log('系统当前时间：' + os.uptime())
	console.log('系统总内存量：' + (os.totalmem() / 1024 / 1024 / 1024).toFixed(1) + 'GB')
}
