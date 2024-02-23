import { ECoreEngineType } from '../config/CfgProfile';
import { EOperationAction } from '../config/OperationProfile';
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
export type TColorRGBAJSON = {
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
export type TCanvasLineCap = 'butt' | 'round' | 'square';
export type TResouceProfileChangedData = {
    fps: number;
    coreEngineType: ECoreEngineType;
};
export type TCanvasProfileChangedData = {
    zoomRatio: number;
    canvasWidth: number;
    canvasHeight: number;
    DPI: [number, number];
};
export type TSystemConfigProfileChangedData = {
    isDarkTheme: boolean;
    alignGrid: boolean;
    enableGrid: boolean;
    enableAxis: boolean;
    enableFPSCount: boolean;
    enableCanvasZoomChange: boolean;
    enableCanvasTranslate: boolean;
};
export type TOpeartionProfileChangedData = {
    action: EOperationAction;
    targetItemId?: string;
    allDrawLayers?: Array<TDrawLayerItemResult>;
};
export type TCanvasExportFileData = {
    dataStr: string;
};
export type TCanvasImportFileData = {
    dataStr: string;
};
