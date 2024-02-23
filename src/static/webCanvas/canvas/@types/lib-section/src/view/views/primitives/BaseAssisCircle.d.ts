import { EElementStatus } from '../../../config/ElementProfile';
import { TElementAssistCircleJSONData } from '../../../types/ElementViewType';
import { ShapeElementViewBase } from '../shapes/base/ShapeElementViewBase';
import { PrimitiveItemBase } from './base/PrimitiveItemBase';
export declare class BaseAssisCircle extends PrimitiveItemBase {
    private parent;
    constructor(layerItemId: string, parent: ShapeElementViewBase);
    modify(status: EElementStatus, data: TElementAssistCircleJSONData): void;
    delete(): void;
}
