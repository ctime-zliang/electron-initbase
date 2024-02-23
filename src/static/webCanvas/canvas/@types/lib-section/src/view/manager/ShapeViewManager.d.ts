import { EElementStatus } from '../../config/ElementProfile';
import { Scene } from '../../engine/common/Scene';
import { ElementShapeItemBase } from '../../objects/shapes/items/elementBase/ElementShapeItemBase';
import { ShapeElementViewBase } from '../views/shapes/base/ShapeElementViewBase';
export declare class ShapeViewManager {
    private static thisInstance;
    static getInstance(): ShapeViewManager;
    private _items;
    constructor();
    get items(): Map<string, ShapeElementViewBase>;
    set items(value: Map<string, ShapeElementViewBase>);
    handleModify(scene: Scene, elements: Set<ElementShapeItemBase>): void;
    modifyItem(elementItemId: string, elementType: string, elementStatus: EElementStatus, elementItemData: any): void;
    deleteItem(elementItemId: string): void;
}
