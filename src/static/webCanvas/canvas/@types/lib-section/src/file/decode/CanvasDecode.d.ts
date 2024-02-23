import { ECanvasCodeIndex } from '../config/CodeEnum';
import { Decode } from './Decode';
export declare class CanvasDecode extends Decode {
    constructor();
    parseLineData(format: Array<ECanvasCodeIndex>, lineData: Array<any>): void;
    finish(): void;
    protected check(): boolean;
}
