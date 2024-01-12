import { EElementStatus } from '../../../config/ElementConfig';
import { TElementAssistCircleViewRenderData } from '../../../types/ElementViewType';
import { ShapeElementViewBase } from '../ShapeElementViewBase';
import { ElementItemBase } from './base/ElementItemBase';
export declare class BaseAssisCircle extends ElementItemBase {
    private parent;
    constructor(layerItemId: string, parent: ShapeElementViewBase);
    modify(status: EElementStatus, data: TElementAssistCircleViewRenderData): void;
    delete(): void;
}
