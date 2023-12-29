import { ElementModelItemBase } from '../../../models/items/elementBase/ElementModelItemBase';
import { ElementShapeBase } from './ElementShapeBase';
export declare abstract class ElementShapeItemBase extends ElementShapeBase {
    private _model;
    constructor();
    get elementItemId(): string;
    get model(): ElementModelItemBase;
    set model(value: ElementModelItemBase);
    refreshRender(): void;
    get visible(): boolean;
    set visible(value: boolean);
    get hightlight(): boolean;
    set hightlight(value: boolean);
    get locked(): boolean;
    set locked(value: boolean);
    get killed(): boolean;
    set killed(value: boolean);
    setSelect(): void;
    setUnSelect(): void;
    setDelete(): void;
}
