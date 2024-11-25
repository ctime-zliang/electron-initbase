import { SceneCanvas } from '../SceneCanvas';
import { TCanvasLineCap } from '../../../types/Common';
export declare class Line {
    private _startX;
    private _startY;
    private _endX;
    private _endY;
    private _strokeWidth;
    private _strokeColor;
    private _lineCap;
    constructor(startX: number, startY: number, endX: number, endY: number, strokeWidth: number, strokeColor?: string, lineCap?: TCanvasLineCap);
    get startX(): number;
    set startX(value: number);
    get startY(): number;
    set startY(value: number);
    get endX(): number;
    set endX(value: number);
    get endY(): number;
    set endY(value: number);
    get strokeWidth(): number;
    set strokeWidth(value: number);
    get strokeColor(): string;
    set strokeColor(value: string);
    get lineCap(): TCanvasLineCap;
    set lineCap(value: TCanvasLineCap);
    render(ctx: CanvasRenderingContext2D, scene: SceneCanvas): void;
}
