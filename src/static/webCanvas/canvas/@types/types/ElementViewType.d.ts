import { EElementStatus, EElementType } from '../config/ElementConfig';
import { Vector2 } from '../geometry/Vector2';
import { TCanvasLineCap, TColorJSON } from './Common';
export type TElementLineViewRenderBaseData = {
    type: EElementType;
    status: EElementStatus;
    layerItemId: string;
    elementItemId: string;
    startPoint: Vector2;
    endPoint: Vector2;
    strokeColor: TColorJSON;
    lineCap: TCanvasLineCap;
    modelType: EElementType;
    length: number;
    width: number;
    isSolid: boolean;
};
export type TElementLineViewRenderData = TElementLineViewRenderBaseData & {};
export type TElementAssistLineViewRenderData = TElementLineViewRenderBaseData & {
    fixedPixelWidth: number;
};
/********************************************************************************/
/********************************************************************************/
export type TElementCircleViewRenderBaseData = {
    type: EElementType;
    status: EElementStatus;
    layerItemId: string;
    elementItemId: string;
    centerPoint: Vector2;
    radius: number;
    strokeWidth: number;
    strokeColor: TColorJSON;
    fillColor: TColorJSON;
    lineCap: TCanvasLineCap;
    modelType: EElementType;
    isSolid: boolean;
};
export type TElementCircleViewRenderData = TElementCircleViewRenderBaseData & {};
