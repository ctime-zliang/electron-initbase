import { Manager } from '../../base/Manage';
import { Vector2 } from '../../../geometry/Vector2';
import { CircleModel } from '../items/CircleModel';
export declare class CircleModelManager extends Manager<CircleModel> {
    private static thisInstance;
    static getInstance(): CircleModelManager;
    constructor();
    createModelItem(layerItemId: string, centerPoint: Vector2, radius: number, strokeWidth?: number): CircleModel;
    deleteModelItem(elementItemId: string): void;
}
