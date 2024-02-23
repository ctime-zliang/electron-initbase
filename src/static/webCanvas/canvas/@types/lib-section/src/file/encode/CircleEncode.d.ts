import { TElementCircleJSONData } from '../../types/ElementViewType';
import { ECircleCodeIndex } from '../config/CodeEnum';
import { Encode } from './Encode';
export declare class CircleEncode extends Encode {
    constructor();
    createLineData(format: Array<ECircleCodeIndex>, data: TElementCircleJSONData): Array<string | number>;
}
