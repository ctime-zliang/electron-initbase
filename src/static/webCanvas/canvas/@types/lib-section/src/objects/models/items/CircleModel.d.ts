import { BBox2 } from '../../../geometry/BBox2';
import { Vector2 } from '../../../geometry/Vector2';
import { ElementModelItemBase } from './elementBase/ElementModelItemBase';
import { Color } from '../../../utils/Color';
import { TCanvasLineCap } from '../../../types/Common';
import { LinearPrimitive } from '../../../geometry/LinearPrimitive';
export declare enum ECircleModelBufferOffset {
    CENTER_X = 0,
    CENTER_Y = 1,
    RADIUS = 2,
    SKROKE_WIDTH = 3,
    SKROKE_COLOR_R = 4,
    SKROKE_COLOR_G = 5,
    SKROKE_COLOR_B = 6,
    SKROKE_COLOR_A = 7,
    FILL_COLOR_R = 8,
    FILL_COLOR_G = 9,
    FILL_COLOR_B = 10,
    FILL_COLOR_A = 11,
    LINE_CAP = 12,
    SOLID = 13,
    $end = 14
}
export declare function buildCircleModel(layerItemId: string, centerPoint: Vector2, radius: number, strokeWidth?: number, strokeColor?: Color, fillColor?: Color): CircleModel;
export declare class CircleModel extends ElementModelItemBase {
    constructor(elementItemId: string, layerItemId: string, centerX: number, centerY: number, radius: number, strokeWidth: number, strokeColor?: Color, fillColor?: Color, lineCap?: TCanvasLineCap, isSolid?: boolean, bbox2?: BBox2);
    get centerPoint(): Vector2;
    set centerPoint(value: Vector2);
    get radius(): number;
    set radius(value: number);
    get strokeWidth(): number;
    set strokeWidth(value: number);
    get strokeColor(): Color;
    set strokeColor(value: Color);
    get fillColor(): Color;
    set fillColor(value: Color);
    get lineCap(): TCanvasLineCap;
    set lineCap(value: TCanvasLineCap);
    get solid(): boolean;
    set solid(value: boolean);
    get element(): LinearPrimitive;
    getBBox2(): BBox2;
    updateBBox2(): BBox2;
    isInGraphical(x: number, y: number): boolean;
    isFill(): boolean;
}
