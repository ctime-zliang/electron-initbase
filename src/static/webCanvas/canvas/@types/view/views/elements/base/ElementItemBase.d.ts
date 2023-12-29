import { DrawLayerView } from '../../DrawLayerView';
import { ElementBase } from './ElementBase';
export declare abstract class ElementItemBase extends ElementBase {
    private _elementItemId;
    private _layerItemId;
    private _belongId;
    constructor(layerItemId: string);
    get elementItemId(): string;
    set elementItemId(value: string);
    get belongId(): string;
    set belongId(value: string);
    get layerItemId(): string;
    set layerItemId(value: string);
    getDrawLayerViewItem(layerItemId: string): DrawLayerView;
}
