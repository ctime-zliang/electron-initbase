import { EDrawLayerType } from '../../../config/DrawLayerConfig';
import { DrawLayerBaseItemModel } from './drawLayerBase/DrawLayerBaseItemModel';
export declare class DrawLayerModel extends DrawLayerBaseItemModel {
    constructor(layerItemId: string, layerItemName: string, layerItemType: EDrawLayerType);
}
