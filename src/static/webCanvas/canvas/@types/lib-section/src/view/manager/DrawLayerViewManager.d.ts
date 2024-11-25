import { TDrawLayerJSONData } from '../../types/DrawLayerViewType';
import { DrawLayerShapeItemBase } from '../../objects/shapes/items/drawLayerBase/DrawLayerShapeItemBase';
import { DrawLayerView } from '../views/shapes/DrawLayerView';
import { EDrawLayerStatus } from '../../config/DrawLayerProfile';
import { Scene } from '../../engine/common/Scene';
export declare class DrawLayerViewManager {
    private static thisInstance;
    static getInstance(): DrawLayerViewManager;
    private _items;
    constructor();
    get items(): Map<string, DrawLayerView>;
    set items(value: Map<string, DrawLayerView>);
    handleModify(scene: Scene, layers: Set<DrawLayerShapeItemBase>): void;
    handleRefreshView(scene: Scene): void;
    modifyItem(scene: Scene, layerItemId: string, layerItemType: number, layerStatus: EDrawLayerStatus, layerItemData: TDrawLayerJSONData): void;
    deleteItem(layerItemId: string): void;
}
