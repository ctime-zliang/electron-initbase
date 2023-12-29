import { InputInfo } from '../InputInfo';
export declare abstract class BaseAuxiliary {
    constructor();
    abstract create(): any;
    abstract update(inputInfo: InputInfo): any;
    abstract destory(): any;
}
