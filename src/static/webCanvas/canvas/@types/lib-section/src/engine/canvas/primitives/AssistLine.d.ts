import { SceneCanvas } from '../SceneCanvas';
export declare class AssistLine {
    private _startX;
    private _startY;
    private _endX;
    private _endY;
    private _strokeColor;
    private _isSolid;
    private _fixedPixelWidth;
    constructor(startX: number, startY: number, endX: number, endY: number, strokeColor: string | undefined, isSolid: boolean, fixedPixelWidth?: number);
    get startX(): number;
    set startX(value: number);
    get startY(): number;
    set startY(value: number);
    get endX(): number;
    set endX(value: number);
    get endY(): number;
    set endY(value: number);
    get fixedPixelWidth(): number;
    set fixedPixelWidth(value: number);
    get strokeColor(): string;
    set strokeColor(value: string);
    get isSolid(): boolean;
    set isSolid(value: boolean);
    render(ctx: CanvasRenderingContext2D, scene: SceneCanvas): void;
}
