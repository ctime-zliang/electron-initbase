import { BBox2 } from '../../../geometry/BBox2';
import { Vector2 } from '../../../geometry/Vector2';
import { ElementModelItemBase } from './elementBase/ElementModelItemBase';
import { Color } from '../../../utils/Color';
import { TCanvasLineCap } from '../../../types/Common';
import { LinearPrimitive } from '../../../geometry/LinearPrimitive';
export declare enum ELineModelBufferOffset {
    START_X = 0,
    START_Y = 1,
    END_X = 2,
    END_Y = 3,
    STROKE_WIDTH = 4,
    STROKE_COLOR_R = 5,
    STROKE_COLOR_G = 6,
    STROKE_COLOR_B = 7,
    STROKE_COLOR_A = 8,
    LINE_CAP = 9,
    SOLID = 10,
    $end = 11
}
export declare function buildLineModel(layerItemId: string, startPoint: Vector2, endPoint: Vector2, strokeWidth?: number, strokeColor?: Color): LineModel;
export declare class LineModel extends ElementModelItemBase {
    constructor(elementItemId: string, layerItemId: string, startX: number, startY: number, endX: number, endY: number, strokeWidth?: number, strokeColor?: Color, lineCap?: TCanvasLineCap, isSolid?: boolean, bbox2?: BBox2);
    get startPoint(): Vector2;
    set startPoint(value: Vector2);
    get endPoint(): Vector2;
    set endPoint(value: Vector2);
    get strokeWidth(): number;
    set strokeWidth(value: number);
    get length(): number;
    set length(value: number);
    get direct(): Vector2;
    get strokeColor(): Color;
    set strokeColor(value: Color);
    get centerPoint(): Vector2;
    get lineCap(): TCanvasLineCap;
    set lineCap(value: TCanvasLineCap);
    get solid(): boolean;
    set solid(value: boolean);
    get element(): LinearPrimitive;
    getBBox2(): BBox2;
    updateBBox2(): BBox2;
    isInGraphical(x: number, y: number): boolean;
}
