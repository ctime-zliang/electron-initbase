import { Manager } from '../../base/Manage';
import { DrawLayerBaseItemModel } from '../items/drawLayerBase/DrawLayerBaseItemModel';
import { DrawLayerModel } from '../items/DrawLayerModel';
export declare class DrawLayerModelManager extends Manager<DrawLayerBaseItemModel> {
    private static thisInstance;
    static getInstance(): DrawLayerModelManager;
    constructor();
    createControlItem(layerItemName: string): DrawLayerModel;
    createContentItem(layerItemName: string): DrawLayerModel;
}
