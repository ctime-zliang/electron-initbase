import { EElementStatus, EElementType } from '../../config/ElementConfig';
import { Vector2 } from '../../geometry/Vector2';
import { TElementShapeType } from '../../types/Element';
import { TElementAssistCircleViewRenderData } from '../../types/ElementViewType';
import { CircleModel } from '../models/items/CircleModel';
import { CircleShape } from '../shapes/items/CircleShape';
export declare function buildAssistPointShape(layerItemId: string, centerPoint: Vector2, parent?: TElementShapeType): AssistPointShape;
export declare class AssistPointShape extends CircleShape {
    private _parent;
    constructor(model: CircleModel, parent?: TElementShapeType);
    get parent(): TElementShapeType;
    set parent(value: TElementShapeType);
    isSelect(x: number, y: number): boolean;
    getType(): EElementType;
    getStatus(): EElementStatus;
    getRenderData(): TElementAssistCircleViewRenderData;
}
