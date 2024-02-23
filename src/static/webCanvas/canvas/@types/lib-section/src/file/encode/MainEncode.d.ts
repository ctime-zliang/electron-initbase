import { TFileType } from '../../types/Element';
import { EFileVsersion } from '../config/Common';
export declare class MainEncode {
    private _version;
    private _formatProfile;
    private _documentEncode;
    private _canvasEncode;
    private _drawLayerEncode;
    private _lineEncode;
    private _circleEncode;
    constructor(version: EFileVsersion);
    createSourceDataStr(): string;
    createFileTypeDatas(fileType: TFileType): Array<Array<string | number>>;
}
