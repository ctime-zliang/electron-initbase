import commonStatus from '../../lib/ResStatus'

export default {
	controller: {
		...commonStatus.controller,
		NO_TITLE: {
			msg: `缺少 title 或 title 为空`,
			ret: -10001,
		},
		NO_ID: {
			msg: `缺少 ID`,
			ret: -10002,
		},
		INVALID_IDS: {
			msg: `不合法的 ID 数组`,
			ret: -10003,
		},
		INVALID_ID: {
			msg: `不合法的 ID`,
			ret: -10004,
		},
	},
	service: {
		...commonStatus.service,
	},
}
