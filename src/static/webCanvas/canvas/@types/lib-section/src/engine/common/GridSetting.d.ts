import { Color } from '../../utils/Color';
export declare class GridSetting {
    private static thisInstance;
    static getInstance(): GridSetting;
    private _gridColor;
    private _gridTransparency;
    private _axisColor;
    private _axisTransparency;
    /**
     * 单位: mm
     */
    private _stepX;
    private _stepY;
    constructor();
    set gridColor(value: Color);
    get gridColor(): Color;
    set gridTransparency(value: number);
    get gridTransparency(): number;
    set axisColor(value: Color);
    get axisColor(): Color;
    set axisTransparency(value: number);
    get axisTransparency(): number;
    set stepX(value: number);
    get stepX(): number;
    set stepY(value: number);
    get stepY(): number;
}
