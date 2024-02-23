import { Vector2 } from '../../../geometry/Vector2';
import { LineShape } from '../items/LineShape';
import { Manager } from '../../base/Manage';
import { Color } from '../../../utils/Color';
export declare class LineShapeManager extends Manager<LineShape> {
    private static thisInstance;
    static getInstance(): LineShapeManager;
    private _rteeItems;
    constructor();
    createShapeItem(elementItemId: string, layerItemId: string, startPoint: Vector2, endPoint: Vector2, strokeWidth?: number, strokeColor?: Color): LineShape;
    deleteShapeItem(elementItemId: string): void;
    private addCache;
    private deleteCache;
}
