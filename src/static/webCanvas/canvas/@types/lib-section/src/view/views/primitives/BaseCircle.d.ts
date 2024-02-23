import { EElementStatus } from '../../../config/ElementProfile';
import { TElementCircleJSONData } from '../../../types/ElementViewType';
import { ShapeElementViewBase } from '../shapes/base/ShapeElementViewBase';
import { PrimitiveItemBase } from './base/PrimitiveItemBase';
export declare class BaseCircle extends PrimitiveItemBase {
    private parent;
    constructor(layerItemId: string, parent: ShapeElementViewBase);
    modify(status: EElementStatus, data: TElementCircleJSONData): void;
    delete(): void;
}
