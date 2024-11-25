import { DrawLayerShapeItemBase } from '../objects/shapes/items/drawLayerBase/DrawLayerShapeItemBase';
import { ElementShapeItemBase } from '../objects/shapes/items/elementBase/ElementShapeItemBase';
import { ElementPresenter } from './ElementPresenter';
import { LayerPresenter } from './LayerPresenter';
export declare class ModifyController {
    private _layerPresenter;
    private _elementPresenter;
    private _layers;
    private _elements;
    constructor();
    setLayerPresenter(layerPresenter: LayerPresenter): void;
    setElementPresenter(elementPresenter: ElementPresenter): void;
    attachLayer(layerItem: DrawLayerShapeItemBase): void;
    attachElement(elementItem: ElementShapeItemBase): void;
    notify(isShouldHandleElementsFirst?: boolean): void;
}
