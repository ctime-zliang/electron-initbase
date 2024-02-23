import { ECanvasCodeIndex } from '../config/CodeEnum';
import { Encode } from './Encode';
export declare class CanvasEncode extends Encode {
    constructor();
    createLineData(format: Array<ECanvasCodeIndex>, data: any): Array<string | number>;
}
