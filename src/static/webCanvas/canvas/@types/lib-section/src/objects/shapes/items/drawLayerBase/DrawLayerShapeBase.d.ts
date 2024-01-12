import { EDrawLayerStatus } from '../../../../config/DrawLayerConfig';
import { Context } from '../../../../utils/Context';
export declare abstract class DrawLayerShapeBase extends Context {
    constructor();
    abstract refreshRender(): void;
    abstract setUnSelect(): void;
    abstract setSelect(): void;
    abstract setDelete(): void;
    abstract getType(): number;
    abstract getStatus(): EDrawLayerStatus;
    abstract getRenderData(): any;
}
