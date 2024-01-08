import { EElementType } from '../config/ElementConfig';
export type T2DCoordinatePositionDot = {
    id: number;
    x: number;
    y: number;
};
export type TCanvasBoundingRect = {
    startX: number;
    startY: number;
    width: number;
    height: number;
};
export type TDOMGetBoundingClientRectResult = {
    x: number;
    y: number;
    width: number;
    height: number;
    right: number;
    bottom: number;
    top: number;
    left: number;
};
export type TColorJSON = {
    red: number;
    green: number;
    blue: number;
    alpha: number;
};
export type TDrawLayerItemResult = {
    layerItemName: string;
    layerItemId: string;
    layerItemStatus: number;
    layerItemType: number;
    layerItemOpacity: number;
};
export type TElementItemResult = {
    elementItemId: string;
    elementItemModelType: EElementType;
};
export type TCanvasLineCap = 'butt' | 'round' | 'square';
export type TResouceChangedData = {
    fps: number;
};
export type TCanvasChangedData = {
    zoomRatio: number;
};
export type TSystemConfigProfile = {
    isDarkTheme: boolean;
    alignGrid: boolean;
    enableGrid: boolean;
    enableAxis: boolean;
    enableFPSCount: boolean;
    enableCanvasZoomChange: boolean;
    enableCanvasTranslate: boolean;
};
