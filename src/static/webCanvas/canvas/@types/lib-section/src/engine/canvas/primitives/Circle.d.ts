import { SceneCanvas } from '../SceneCanvas';
import { TCanvasLineCap } from '../../../types/Common';
export declare class Circle {
    private _centerX;
    private _centerY;
    private _radius;
    private _strokeWidth;
    private _strokeColor;
    private _fillColor;
    private _lineCap;
    constructor(centerX: number, centerY: number, radius: number, strokeWidth: number, strokeColor?: string, fillColor?: string, lineCap?: TCanvasLineCap);
    get centerX(): number;
    set centerX(value: number);
    get centerY(): number;
    set centerY(value: number);
    get radius(): number;
    set radius(value: number);
    get strokeWidth(): number;
    set strokeWidth(value: number);
    get strokeColor(): string;
    set strokeColor(value: string);
    get fillColor(): string;
    set fillColor(value: string);
    get lineCap(): TCanvasLineCap;
    set lineCap(value: TCanvasLineCap);
    render(ctx: CanvasRenderingContext2D, scene: SceneCanvas): void;
}
