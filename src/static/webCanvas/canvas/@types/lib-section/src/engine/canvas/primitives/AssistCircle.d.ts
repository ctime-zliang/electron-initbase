import { SceneCanvas } from '../SceneCanvas';
import { TCanvasLineCap } from '../../../types/Common';
export declare class AssistCircle {
    private _centerX;
    private _centerY;
    private _strokeWidth;
    private _strokeColor;
    private _fillColor;
    private _lineCap;
    private _radius;
    constructor(centerX: number, centerY: number, strokeColor?: string, strokeWidth?: number, fillColor?: string, lineCap?: TCanvasLineCap, radius?: number);
    get centerX(): number;
    set centerX(value: number);
    get centerY(): number;
    set centerY(value: number);
    get strokeWidth(): number;
    set strokeWidth(value: number);
    get strokeColor(): string;
    set strokeColor(value: string);
    get fillColor(): string;
    set fillColor(value: string);
    get lineCap(): TCanvasLineCap;
    set lineCap(value: TCanvasLineCap);
    get radius(): number;
    set radius(value: number);
    render(ctx: CanvasRenderingContext2D, scene: SceneCanvas): void;
}
