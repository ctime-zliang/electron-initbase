/**
 * 像素转毫米
 * 		width = xpx * 25.4 / DPI
 * 		height = ypx * 25.4 / DPI
 * 毫米转像素
 * 		xpx = width * DPI / 25.4
 * 		ypx = height * DPI / 25.4
 */
export declare class Device {
    static getDPR(): number;
    static getAbsoluteDPI(): [number, number];
}
