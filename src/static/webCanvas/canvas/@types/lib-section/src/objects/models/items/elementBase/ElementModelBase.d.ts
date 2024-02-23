import { BBox2 } from '../../../../geometry/BBox2';
export declare abstract class ElementModelBase {
    constructor();
    abstract isInGraphical(...args: Array<any>): boolean;
    abstract updateBuffer(offset: number, data: ArrayLike<number>): void;
    abstract updateBBox2(...args: Array<any>): BBox2;
}
