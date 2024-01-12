import { DrawLayerBaseItemModel } from '../../../models/items/drawLayerBase/DrawLayerBaseItemModel';
import { DrawLayerShapeBase } from './DrawLayerShapeBase';
export declare abstract class DrawLayerShapeItemBase extends DrawLayerShapeBase {
    private _model;
    constructor();
    get layerItemId(): string;
    get model(): DrawLayerBaseItemModel;
    set model(value: DrawLayerBaseItemModel);
    refreshRender(): void;
    get visible(): boolean;
    set visible(value: boolean);
    get locked(): boolean;
    set locked(value: boolean);
    get killed(): boolean;
    set killed(value: boolean);
    setSelect(): void;
    setUnSelect(): void;
    setDelete(): void;
}
