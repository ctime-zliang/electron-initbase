import { ECircleCodeIndex } from '../config/CodeEnum';
import { Decode } from './Decode';
export declare class CircleDecode extends Decode {
    private _tempPrimitiveItems;
    constructor();
    parseLineData(format: Array<ECircleCodeIndex>, lineData: Array<any>): void;
    finish(layerItemIdsMap: {
        [key: string]: string;
    }): void;
    protected check(): boolean;
}
