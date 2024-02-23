import { TFileType } from '../../types/Element';
export declare class MainDecode {
    private _formatProfile;
    private _documentDecode;
    private _canvasDecode;
    private _drawLayerDecode;
    private _lineDecode;
    private _circleDecode;
    constructor();
    parseData(fileDataString: string): void;
    parseFileTypeDatas(fileType: TFileType, lineData: Array<any>): void;
    private finish;
}
