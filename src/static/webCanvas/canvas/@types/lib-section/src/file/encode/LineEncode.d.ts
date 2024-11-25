import { TElementLineJSONData } from '../../types/ElementViewType';
import { ELineCodeIndex } from '../config/CodeEnum';
import { Encode } from './Encode';
export declare class LineEncode extends Encode {
    constructor();
    createLineData(format: Array<ELineCodeIndex>, data: TElementLineJSONData): Array<string | number>;
}
