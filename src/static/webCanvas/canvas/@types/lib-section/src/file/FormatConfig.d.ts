import { ECanvasCodeIndex, ECircleCodeIndex, EDocumentCodeIndex, EDrawLayerCodeIndex, ELineCodeIndex } from './config/CodeEnum';
export type TFormatCfgProfile = {
    DOCUMENT: Array<EDocumentCodeIndex>;
    CANVAS: Array<ECanvasCodeIndex>;
    DRAWLAYER: Array<EDrawLayerCodeIndex>;
    LINE: Array<ELineCodeIndex>;
    CIRCLE: Array<ECircleCodeIndex>;
};
export declare class FormatConfig {
    static createProfile(): TFormatCfgProfile;
    static createDocumentCodeProfile(): Array<EDocumentCodeIndex>;
    static createCanvasCodeProfile(): Array<ECanvasCodeIndex>;
    static createDrawLayerCodeProfile(): Array<EDrawLayerCodeIndex>;
    static createLineCodeProfile(): Array<ELineCodeIndex>;
    static createCircleCodeProfile(): Array<ECircleCodeIndex>;
}
