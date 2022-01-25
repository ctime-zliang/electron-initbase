export interface IPageInitURLData {
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
export interface IGlobalWindowItemProfile {
	id: string | number | null
	win: any
	pageInitURL: string | null
	pageInitURLData: IPageInitURLData
	// [key: string]: any
}
export interface IElectronAppRuntimeProfile {
	globalActiveWindowId: string | number | null
	globalWindowMap?: IGlobalWindowItemProfile | any
	// [key: string]: any
}
