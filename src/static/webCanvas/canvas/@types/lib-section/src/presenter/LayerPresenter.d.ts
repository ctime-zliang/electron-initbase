import { Scene } from '../engine/common/Scene';
import { DrawLayerShapeItemBase } from '../objects/shapes/items/drawLayerBase/DrawLayerShapeItemBase';
import { Presenter } from './Presenter';
export declare class LayerPresenter extends Presenter {
    private _scene;
    constructor(scene: Scene);
    notify(layers: Set<DrawLayerShapeItemBase>): void;
}
