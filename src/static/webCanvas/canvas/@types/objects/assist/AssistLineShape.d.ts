import { EElementStatus, EElementType } from '../../config/ElementConfig';
import { Vector2 } from '../../geometry/Vector2';
import { TElementAssistLineViewRenderData } from '../../types/ElementViewType';
import { LineModel } from '../models/items/LineModel';
import { LineShape } from '../shapes/items/LineShape';
export declare function buildAssistLineShape(layerItemId: string, startPoint: Vector2, endPoint: Vector2, isSolid?: boolean): AssistLineShape;
export declare class AssistLineShape extends LineShape {
    private _fixedPixelWidth;
    constructor(model: LineModel, isSolid?: boolean);
    get fixedPixelWidth(): number;
    set fixedPixelWidth(value: number);
    getType(): EElementType;
    getStatus(): EElementStatus;
    getRenderData(): TElementAssistLineViewRenderData;
}
