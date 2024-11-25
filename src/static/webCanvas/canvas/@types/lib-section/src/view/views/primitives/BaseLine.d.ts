import { EElementStatus } from '../../../config/ElementProfile';
import { TElementLineJSONData } from '../../../types/ElementViewType';
import { ShapeElementViewBase } from '../shapes/base/ShapeElementViewBase';
import { PrimitiveItemBase } from './base/PrimitiveItemBase';
export declare class BaseLine extends PrimitiveItemBase {
    private parent;
    constructor(layerItemId: string, parent: ShapeElementViewBase);
    modify(status: EElementStatus, data: TElementLineJSONData): void;
    delete(): void;
}
