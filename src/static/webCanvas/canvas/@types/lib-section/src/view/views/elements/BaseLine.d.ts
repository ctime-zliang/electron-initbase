import { EElementStatus } from '../../../config/ElementConfig';
import { TElementLineViewRenderData } from '../../../types/ElementViewType';
import { ShapeElementViewBase } from '../ShapeElementViewBase';
import { ElementItemBase } from './base/ElementItemBase';
export declare class BaseLine extends ElementItemBase {
    private parent;
    constructor(layerItemId: string, parent: ShapeElementViewBase);
    modify(status: EElementStatus, data: TElementLineViewRenderData): void;
    delete(): void;
}
