import { EElementStatus, EElementType } from '../config/ElementProfile';
import { TVector2JSONData } from '../geometry/Vector2';
import { TCanvasLineCap, TColorRGBAJSON } from './Common';
export type TElementJSONBaseData = TElementLineJSONBaseData | TElementCircleJSONBaseData;
/********************************************************************************/
/********************************************************************************/
export type TElementLineJSONBaseData = {
    type: EElementType;
    status: EElementStatus;
    layerItemId: string;
    elementItemId: string;
    elementItemName: string;
    startPoint: TVector2JSONData;
    endPoint: TVector2JSONData;
    strokeColor: TColorRGBAJSON;
    lineCap: TCanvasLineCap;
    modelType: EElementType;
    strokeWidth: number;
    isSolid: boolean;
};
export type TElementLineJSONData = TElementLineJSONBaseData & {};
export type TElementAssistLineJSONData = TElementLineJSONBaseData & {
    fixedPixelWidth: number;
};
/********************************************************************************/
/********************************************************************************/
export type TElementCircleJSONBaseData = {
    type: EElementType;
    status: EElementStatus;
    layerItemId: string;
    elementItemId: string;
    elementItemName: string;
    centerPoint: TVector2JSONData;
    radius: number;
    strokeWidth: number;
    strokeColor: TColorRGBAJSON;
    fillColor: TColorRGBAJSON;
    lineCap: TCanvasLineCap;
    modelType: EElementType;
    isSolid: boolean;
};
export type TElementCircleJSONData = TElementCircleJSONBaseData & {};
export type TElementAssistCircleJSONData = TElementCircleJSONBaseData & {};
