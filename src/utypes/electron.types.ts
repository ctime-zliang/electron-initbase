export type TSchemesCommonResponse = {
	success: boolean
}

export type TPageInitURLData = {
	href: string
	origin: string
	host: string
	hostname: string
	port: string
	pathname?: string
	search?: string
	searchParams?: any
	hash?: string
	protocol?: string
	username?: string
	password?: string
}
export type TGlobalWindowItemProfile = {
	id: string | number | null
	win: any
	pageInitURL: string | null
	pageInitURLData: TPageInitURLData | null
	capturedScreenSourceId: string
	// [key: string]: any
}
export type TElectronAppRuntimeProfile = {
	globalActiveWindowId: string | number
	globalWindowMap?: TGlobalWindowItemProfile | any
	// [key: string]: any
}

export type TCertificateErrorCallback = (isContinue: boolean) => void
