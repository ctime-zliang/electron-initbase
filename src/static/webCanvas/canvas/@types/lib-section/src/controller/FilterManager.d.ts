import { BBox2 } from '../geometry/BBox2';
import { ElementShapeItemBase } from '../objects/shapes/items/elementBase/ElementShapeItemBase';
export declare class FilterManager {
    constructor();
    /**
     * 获取点选图元集合
     */
    pointSelectBeforeFilter(x: number, y: number): Set<ElementShapeItemBase>;
    /**
     * 获取框选图元集合
     */
    boxSelectBeforeFilter(bbox2: BBox2): Set<ElementShapeItemBase>;
}
