import { Vector2 } from '../../../geometry/Vector2';
import { Manager } from '../../base/Manage';
import { CircleShape } from '../items/CircleShape';
import { Color } from '../../../utils/Color';
export declare class CircleShapeManager extends Manager<CircleShape> {
    private static thisInstance;
    static getInstance(): CircleShapeManager;
    private _rteeItems;
    constructor();
    createShapeItem(elementItemId: string, layerItemId: string, centerPoint: Vector2, radius: number, strokeWidth?: number, strokeColor?: Color, fillColor?: Color): CircleShape;
    deleteShapeItem(elementItemId: string): void;
    private addCache;
    private deleteCache;
}
