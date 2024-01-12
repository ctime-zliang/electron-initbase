import { EElementStatus } from '../../../config/ElementConfig';
import { TElementAssistLineViewRenderData } from '../../../types/ElementViewType';
import { ShapeElementViewBase } from '../ShapeElementViewBase';
import { ElementItemBase } from './base/ElementItemBase';
export declare class BaseAssistLine extends ElementItemBase {
    private parent;
    constructor(layerItemId: string, parent: ShapeElementViewBase);
    modify(status: EElementStatus, data: TElementAssistLineViewRenderData): void;
    delete(): void;
}
