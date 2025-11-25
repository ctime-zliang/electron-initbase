import path from 'path'
import { app } from 'electron'

/*
    获取用户文档目录
 */
export const USER_DOCUMENT_DIR: string = app.getPath('documents')
/* 
    生成应用用户根目录
 */
export const APP_BASE_DIR: string = path.join(USER_DOCUMENT_DIR, './electron-app')

export const APP_CONFIG_DIR: string = path.join(APP_BASE_DIR, './config')
export const APP_RUN_LOG: string = path.join(APP_CONFIG_DIR, './log.ini')
/* ... */
export const APP_DATA_DIR: string = path.join(APP_BASE_DIR, './data')
