import { EElementStatus, EElementType } from '../../../../config/ElementProfile';
import { Matrix4 } from '../../../../Main';
import { Context } from '../../../../utils/Context';
export declare abstract class ElementShapeBase extends Context {
    constructor();
    abstract refreshRender(): void;
    abstract transform(matrix4: Matrix4): void;
    abstract isSelect(...args: Array<any>): boolean;
    abstract setUnSelect(): void;
    abstract setSelect(): void;
    abstract setDelete(): void;
    abstract getType(): EElementType;
    abstract getStatus(): EElementStatus;
    abstract toJSON(): any;
}
