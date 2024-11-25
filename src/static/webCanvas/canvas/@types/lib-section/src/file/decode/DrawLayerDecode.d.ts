import { EDrawLayerCodeIndex } from '../config/CodeEnum';
import { Decode } from './Decode';
export declare class DrawLayerDecode extends Decode {
    private _tempPrimitiveItems;
    constructor();
    parseLineData(format: Array<EDrawLayerCodeIndex>, lineData: Array<any>): void;
    finish(): {
        [key: string]: string;
    };
    protected check(): boolean;
}
