import { DrawLayerView } from '../../shapes/DrawLayerView';
import { PrimitiveBase } from './PrimitiveBase';
export declare abstract class PrimitiveItemBase extends PrimitiveBase {
    private _primitiveItemId;
    private _layerItemId;
    private _belongId;
    constructor(layerItemId: string);
    get primitiveItemId(): string;
    set primitiveItemId(value: string);
    get belongId(): string;
    set belongId(value: string);
    get layerItemId(): string;
    set layerItemId(value: string);
    getDrawLayerViewItem(layerItemId: string): DrawLayerView;
}
