import { EElementStatus } from '../../config/ElementConfig';
import { Scene } from '../../engine/common/Scene';
import { ElementShapeItemBase } from '../../objects/shapes/items/elementBase/ElementShapeItemBase';
import { ShapeElementViewBase } from '../views/ShapeElementViewBase';
export declare class ElementViewManager {
    private static thisInstance;
    static getInstance(): ElementViewManager;
    private _items;
    constructor();
    get items(): Map<string, ShapeElementViewBase>;
    set items(value: Map<string, ShapeElementViewBase>);
    handleModify(scene: Scene, elements: Set<ElementShapeItemBase>): void;
    modifyItem(elementItemId: string, elementType: string, elementStatus: EElementStatus, elementItemData: any): void;
    deleteItem(elementItemId: string): void;
}
