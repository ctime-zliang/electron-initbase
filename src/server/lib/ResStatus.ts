export default {
	controller: {
		/* ... */
	},
	service: {
		WRITE_ITEM_FAILER: {
			msg: `写入 Mysql 单行数据失败`,
			ret: -90001,
		},
		DELETE_ITEM_FAILER: {
			msg: '删除 Mysql 单行数据失败',
			ret: -90002,
		},
		READ_NEW_ROW_FAILER: {
			msg: `读取新增行记录失败`,
			ret: -90003,
		},
		READ_TARGET_ROW_FAILER: {
			msg: `查找记录不存在或存在其他错误`,
			ret: -90004,
		},
		UPDATE_ITEM_FAILER: {
			msg: `更新 Mysql 单行数据失败`,
			ret: -90005,
		},
	},
}
