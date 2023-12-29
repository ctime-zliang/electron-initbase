import { BaseAuxiliary } from './BaseAuxiliary';
import { InputInfo } from '../InputInfo';
export declare class CrossAssist extends BaseAuxiliary {
    private _xLineShape;
    private _yLineShape;
    constructor();
    hasInstance(): boolean;
    create(): void;
    update(inputInfo: InputInfo): void;
    destory(): void;
}
