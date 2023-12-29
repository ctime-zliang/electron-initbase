import { EElementStatus, EElementType } from '../../../../config/ElementConfig';
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
    abstract getRenderData(): any;
}
