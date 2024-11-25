import { EDocumentCodeIndex } from '../config/CodeEnum';
import { Encode } from './Encode';
export declare class DocumentEncode extends Encode {
    constructor();
    createLineData(format: Array<EDocumentCodeIndex>, data: any): Array<string | number>;
}
