import { TDrawLayerJSONData } from '../../../types/DrawLayerViewType';
import { EDrawLayerStatus } from '../../../config/DrawLayerProfile';
import { DrawLayerModel } from '../../models/items/DrawLayerModel';
import { DrawLayerShapeItemBase } from './drawLayerBase/DrawLayerShapeItemBase';
export declare class DrawLayerShape extends DrawLayerShapeItemBase {
    constructor(model: DrawLayerModel);
    get layerItemName(): string;
    set layerItemName(value: string);
    get layerItemOpacity(): number;
    set layerItemOpacity(value: number);
    get groupId(): string | undefined;
    set groupId(value: string | undefined);
    getType(): number;
    getStatus(): EDrawLayerStatus;
    toJSON(): TDrawLayerJSONData;
}
