import { Manager } from '../../base/Manage';
import { Vector2 } from '../../../geometry/Vector2';
import { LineModel } from '../items/LineModel';
import { Color } from '../../../utils/Color';
export declare class LineModelManager extends Manager<LineModel> {
    private static thisInstance;
    static getInstance(): LineModelManager;
    constructor();
    createModelItem(elementItemId: string, layerItemId: string, startPoint: Vector2, endPoint: Vector2, strokeWidth?: number, strokeColor?: Color): LineModel;
    deleteModelItem(elementItemId: string): void;
}
