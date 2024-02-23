import { Manager } from '../../base/Manage';
import { Vector2 } from '../../../geometry/Vector2';
import { CircleModel } from '../items/CircleModel';
import { Color } from '../../../utils/Color';
export declare class CircleModelManager extends Manager<CircleModel> {
    private static thisInstance;
    static getInstance(): CircleModelManager;
    constructor();
    createModelItem(elementItemId: string, layerItemId: string, centerPoint: Vector2, radius: number, strokeWidth?: number, strokeColor?: Color, fillColor?: Color): CircleModel;
    deleteModelItem(elementItemId: string): void;
}
