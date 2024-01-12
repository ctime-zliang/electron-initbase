import { DrawLayerShapeItemBase } from '../objects/shapes/items/drawLayerBase/DrawLayerShapeItemBase';
import { ElementShapeItemBase } from '../objects/shapes/items/elementBase/ElementShapeItemBase';
import { TElementShapeType } from '../types/Element';
export declare class Helper {
    static getAllElementShapes(): Array<TElementShapeType>;
    static getAllDrawLayerShapes(): Array<DrawLayerShapeItemBase>;
    static deleteElementItem(elementItem: ElementShapeItemBase): void;
    static checkDrawLayer(layerItemId: string): {
        check: boolean;
        title: string;
    };
}
