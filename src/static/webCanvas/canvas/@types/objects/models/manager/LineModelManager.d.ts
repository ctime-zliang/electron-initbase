import { Manager } from '../../base/Manage';
import { Vector2 } from '../../../geometry/Vector2';
import { LineModel } from '../items/LineModel';
export declare class LineModelManager extends Manager<LineModel> {
    private static thisInstance;
    static getInstance(): LineModelManager;
    constructor();
    createModelItem(layerItemId: string, startPoint: Vector2, endPoint: Vector2, width?: number): LineModel;
    deleteModelItem(elementItemId: string): void;
}
