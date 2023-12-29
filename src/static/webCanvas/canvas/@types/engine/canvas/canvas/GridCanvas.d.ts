import { Gird } from '../../common/Grid';
export declare class GridCanvas extends Gird {
    private readonly _systemConfig;
    constructor();
    render(ctx: CanvasRenderingContext2D): void;
    private calcAxisPostion;
    private renderAxis;
    private renderGrid;
    private getSamplingStepSize;
}
