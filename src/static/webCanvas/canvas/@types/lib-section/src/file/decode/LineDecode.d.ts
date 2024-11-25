import { ELineCodeIndex } from '../config/CodeEnum';
import { Decode } from './Decode';
export declare class LineDecode extends Decode {
    private _tempPrimitiveItems;
    constructor();
    parseLineData(format: Array<ELineCodeIndex>, lineData: Array<any>): void;
    finish(layerItemIdsMap: {
        [key: string]: string;
    }): void;
    protected check(): boolean;
}
