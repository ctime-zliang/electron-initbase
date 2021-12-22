export interface IGlobalWindowItemProfile {
	id: string | number | null
	win: any
	pageInitURL: string | null
	windowBounds: any
	[key: string]: any
}
export interface IElectronAppRuntimeProfile {
	globalActiveWindowId: string | number | null
	globalWindowMap?: IGlobalWindowItemProfile | any
	[key: string]: any
}
