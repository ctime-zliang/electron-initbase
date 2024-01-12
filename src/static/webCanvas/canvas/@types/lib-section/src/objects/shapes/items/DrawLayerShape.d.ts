import { TDrawLayerViewRenderData } from '../../../types/DrawLayerViewType';
import { EDrawLayerStatus } from '../../../config/DrawLayerConfig';
import { DrawLayerModel } from '../../models/items/DrawLayerModel';
import { DrawLayerShapeItemBase } from './drawLayerBase/DrawLayerShapeItemBase';
export declare class DrawLayerShape extends DrawLayerShapeItemBase {
    constructor(model: DrawLayerModel);
    getType(): number;
    getStatus(): EDrawLayerStatus;
    getRenderData(): TDrawLayerViewRenderData;
}
