import { TDrawLayerJSONData } from '../../types/DrawLayerViewType';
import { EDrawLayerCodeIndex } from '../config/CodeEnum';
import { Encode } from './Encode';
export declare class DrawLayerEncode extends Encode {
    constructor();
    createLineData(format: Array<EDrawLayerCodeIndex>, data: TDrawLayerJSONData): Array<string | number>;
}
