import { EElementStatus, EElementType } from '../../config/ElementProfile';
import { Vector2 } from '../../geometry/Vector2';
import { TElementShapeType } from '../../types/Element';
import { TElementAssistLineJSONData } from '../../types/ElementViewType';
import { LineModel } from '../models/items/LineModel';
import { LineShape } from '../shapes/items/LineShape';
export declare function buildAssistLineShape(layerItemId: string, startPoint: Vector2, endPoint: Vector2, isSolid?: boolean, parent?: TElementShapeType): AssistLineShape;
export declare class AssistLineShape extends LineShape {
    private _fixedPixelWidth;
    private _parent;
    constructor(model: LineModel, isSolid?: boolean, parent?: TElementShapeType);
    get fixedPixelWidth(): number;
    set fixedPixelWidth(value: number);
    get parent(): TElementShapeType;
    set parent(value: TElementShapeType);
    getType(): EElementType;
    getStatus(): EElementStatus;
    toJSON(): TElementAssistLineJSONData;
}
