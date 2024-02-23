import { EElementStatus, EElementType } from '../../../config/ElementProfile';
import { TElementLineJSONData } from '../../../types/ElementViewType';
import { ShapeElementViewBase } from './base/ShapeElementViewBase';
import { Vector2 } from '../../../geometry/Vector2';
export declare class LineView extends ShapeElementViewBase {
    private _type;
    private _layerItemId;
    private _startPoint;
    private _endPoint;
    private _mainPrimitive;
    private _maskPrimitive;
    constructor(id: string, layerItemId: string, type: EElementType);
    get type(): EElementType;
    set type(value: EElementType);
    get layerItemId(): string;
    set layerItemId(value: string);
    get startPoint(): Vector2;
    set startPoint(value: Vector2);
    get endPoint(): Vector2;
    set endPoint(value: Vector2);
    modify(elementStatus: EElementStatus, elementItemData: TElementLineJSONData): void;
    delete(): void;
    normalview(): void;
    hightlighting(layerItemId: string): void;
}
