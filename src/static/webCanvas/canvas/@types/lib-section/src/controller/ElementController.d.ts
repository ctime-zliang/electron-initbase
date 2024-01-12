import { TCanvasLineCap, TElementItemResult } from '../types/Common';
import { Color } from '../utils/Color';
export declare class ElementController {
    constructor();
    getAllElementResults(): Array<TElementItemResult>;
    createLineShapeItem(layerItemId: string, startX: number, startY: number, endX: number, endY: number, width?: number): string;
    deleteLineShapeItem(elementItemId: string): void;
    createCircleShapeItem(layerItemId: string, centerX: number, centerY: number, radius: number, strokeWidth: number, strokeColor?: Color, fillColor?: Color): string;
    deleteCircleShapeItem(elementItemId: string): void;
    setElementItemStrokeColor(elementItemId: string, color: Color): void;
    setElementItemFillColor(elementItemId: string, color: Color): void;
    setElementItemLineCap(elementItemId: string, lineCap: TCanvasLineCap): void;
    setElementItemName(elementItemId: string, elementItemName: string): void;
}
