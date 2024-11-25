import { ElementShapeItemBase } from '../objects/shapes/items/elementBase/ElementShapeItemBase';
import { BBox2 } from './BBox2';
import { TSimpleRect } from './rtree/types';
export declare class RtreeItem {
    static getSimpleRectFromBbox2(bbox2: BBox2): TSimpleRect;
    static getSimpleRectFromModelBbox2(item: ElementShapeItemBase): TSimpleRect;
    private _bbox2;
    private _target;
    constructor(target: ElementShapeItemBase);
    get target(): ElementShapeItemBase;
    get targetId(): string;
    getBBox2(): BBox2;
    updateBBox2(bbox2: BBox2): void;
}
