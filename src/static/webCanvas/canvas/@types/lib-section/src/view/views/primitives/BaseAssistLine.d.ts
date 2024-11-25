import { EElementStatus } from '../../../config/ElementProfile';
import { TElementAssistLineJSONData } from '../../../types/ElementViewType';
import { ShapeElementViewBase } from '../shapes/base/ShapeElementViewBase';
import { PrimitiveItemBase } from './base/PrimitiveItemBase';
export declare class BaseAssistLine extends PrimitiveItemBase {
    private parent;
    constructor(layerItemId: string, parent: ShapeElementViewBase);
    modify(status: EElementStatus, data: TElementAssistLineJSONData): void;
    delete(): void;
}
