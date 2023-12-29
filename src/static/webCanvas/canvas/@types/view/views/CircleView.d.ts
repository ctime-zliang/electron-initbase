import { EElementStatus, EElementType } from '../../config/ElementConfig';
import { TElementCircleViewRenderData } from '../../types/ElementViewType';
import { ShapeElementViewBase } from './ShapeElementViewBase';
import { Vector2 } from '../../geometry/Vector2';
export declare class CircleView extends ShapeElementViewBase {
    private _type;
    private _layerItemId;
    private _centerPoint;
    private _radius;
    private _strokeWidth;
    private _mainLine;
    private _maskLine;
    constructor(id: string, layerItemId: string, type: EElementType);
    get type(): EElementType;
    set type(value: EElementType);
    get layerItemId(): string;
    set layerItemId(value: string);
    get centerPoint(): Vector2;
    set centerPoint(value: Vector2);
    get radius(): number;
    set radius(value: number);
    get strokeWidth(): number;
    set strokeWidth(value: number);
    modify(elementStatus: EElementStatus, elementItemData: TElementCircleViewRenderData): void;
    delete(): void;
    normalview(): void;
    hightlighting(layerItemId: string): void;
}
