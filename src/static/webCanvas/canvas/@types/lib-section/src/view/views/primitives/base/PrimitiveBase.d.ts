import { DrawLayerView } from '../../shapes/DrawLayerView';
export declare abstract class PrimitiveBase {
    constructor();
    abstract modify(...args: Array<any>): void;
    abstract delete(): void;
    abstract getDrawLayerViewItem(layerItemId: string): DrawLayerView;
}
