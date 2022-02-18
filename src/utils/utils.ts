import fs from 'fs'

/**
 * 创建目录
 * @param {string} dir 需要生成的目录
 * @return {string | undefined} 处理后的值
 */
export const mkdirSync = (dir: string): string | undefined => {
	if (fs.existsSync(dir)) {
		return
	}
	return fs.mkdirSync(dir, { recursive: true })
}

/**
 * 前置添 0
 * @param {number | string} value 待处理的值
 * @return {string} 处理后的值
 */
export const padNumber = (value: number): string => {
	return value > 9 ? String(value) : '0' + String(value)
}

/**
 * 格式化时间
 * @param {number} date 时间戳(时间对象)
 * @param {string} format 期望的格式
 * @return {string} 格式化的时间字符串
 */
export const formatDates = (date = new Date(), format: string = 'yyyy-MM-dd HH:ii:ss'): string => {
	let o: { [key: string]: any } = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'H+': date.getHours(),
		'h+': date.getHours(),
		'i+': date.getMinutes(),
		's+': date.getSeconds(),
		'q+': Math.floor((date.getMonth() + 3) / 3),
		S: date.getMilliseconds(),
	}
	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
	}
	for (let k in o) {
		if (new RegExp('(' + k + ')').test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
		}
	}
	return format
}
