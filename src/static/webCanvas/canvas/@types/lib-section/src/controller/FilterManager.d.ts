import { BBox2 } from '../geometry/BBox2';
import { ElementShapeItemBase } from '../objects/shapes/items/elementBase/ElementShapeItemBase';
export declare class FilterManager {
    constructor();
    pointSelectBeforeFilter(x: number, y: number): Set<ElementShapeItemBase>;
    boxSelectBeforeFilter(bbox2: BBox2): Set<ElementShapeItemBase>;
}
