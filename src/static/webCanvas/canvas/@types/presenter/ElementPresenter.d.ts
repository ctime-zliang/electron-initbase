import { Scene } from '../engine/common/Scene';
import { ElementShapeItemBase } from '../objects/shapes/items/elementBase/ElementShapeItemBase';
import { Presenter } from './Presenter';
export declare class ElementPresenter extends Presenter {
    private _scene;
    constructor(scene: Scene);
    notify(elements: Set<ElementShapeItemBase>): void;
}
