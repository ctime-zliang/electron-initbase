import { EElementStatus } from '../../../config/ElementConfig';
import { TElementCircleViewRenderData } from '../../../types/ElementViewType';
import { ShapeElementViewBase } from '../ShapeElementViewBase';
import { ElementItemBase } from './base/ElementItemBase';
export declare class BaseCircle extends ElementItemBase {
    private parent;
    constructor(layerItemId: string, parent: ShapeElementViewBase);
    modify(status: EElementStatus, data: TElementCircleViewRenderData): void;
    delete(): void;
}
