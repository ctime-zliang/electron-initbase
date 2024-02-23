import { TColorRGBAJSON } from '../types/Common';
export type TRGBAColor = {
    r: number;
    g: number;
    b: number;
    a: number;
};
export type THSLColor = {
    h: number;
    s: number;
    l: number;
};
export type THSBColor = {
    h: number;
    s: number;
    b: number;
};
export type THEXColor = string;
export declare class Color {
    static WHITE: Color;
    static BLACK: Color;
    static RED: Color;
    static GREEN: Color;
    static BLUE: Color;
    static GRAY: Color;
    static SILVER: Color;
    static GOLDEN: Color;
    static ORANGE: Color;
    static YELLOW: Color;
    static createByHex(hex: string): Color;
    static createByValue(r: number, g: number, b: number, a: number): Color;
    static createByAlpha(aplah: number, color?: Color): Color;
    /**
     * RGBA 转 HEX
     *
     * { r: 255, g: 165, b: 1, a: 255 } => 'ffa501'
     */
    static rgba2Hex(rgb: TRGBAColor): THEXColor;
    /**
     * HEX 转 RGBA
     *
     * '#27ae60ff' => { r: 29, g: 174, b: 96, a: 255 }
     * '#27ae60' => { r: 29, g: 174, b: 96, a: 255 }
     */
    static hex2Rgba(hex: string): TRGBAColor;
    /**
     * RGBA 转 HSB
     */
    static rgba2Hsb(rgba: TRGBAColor): THSBColor;
    /**
     * HSB 转 RGBA
     */
    static hsb2Rgba(hsb: THSBColor): TRGBAColor;
    static rgba2Hsl(rgba: TRGBAColor): THSLColor;
    static hsl2Rgba(hsl: THSLColor): TRGBAColor;
    private _r;
    private _g;
    private _b;
    private _a;
    constructor(r: number, g: number, b: number, a?: number);
    get red(): number;
    set red(value: number);
    get green(): number;
    set green(value: number);
    get blue(): number;
    set blue(value: number);
    get alpha(): number;
    set alpha(value: number);
    toRGBAString(): string;
    toRGBAJSON(): TColorRGBAJSON;
}
