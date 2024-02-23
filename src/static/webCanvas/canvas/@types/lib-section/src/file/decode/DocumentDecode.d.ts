import { EDocumentCodeIndex } from '../config/CodeEnum';
import { Decode } from './Decode';
export declare class DocumentDecode extends Decode {
    constructor();
    parseLineData(format: Array<EDocumentCodeIndex>, lineData: Array<any>): void;
    finish(): void;
    protected check(): boolean;
}
