import { EDrawLayerType } from '../../../config/DrawLayerProfile';
import { DrawLayerBaseItemModel } from './drawLayerBase/DrawLayerBaseItemModel';
export declare class DrawLayerModel extends DrawLayerBaseItemModel {
    constructor(layerItemId: string, layerItemName: string, layerItemType: EDrawLayerType);
}
