import { DrawLayerView } from '../../DrawLayerView';
export declare abstract class ElementBase {
    constructor();
    abstract modify(...args: Array<any>): void;
    abstract delete(): void;
    abstract getDrawLayerViewItem(layerItemId: string): DrawLayerView;
}
