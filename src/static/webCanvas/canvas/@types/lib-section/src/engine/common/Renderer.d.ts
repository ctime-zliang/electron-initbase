import { Vector3 } from '../../geometry/Vector3';
export declare abstract class Renderer {
    private _canvasElement;
    private _ctx;
    private _origin;
    private _config;
    constructor(canvasElement: HTMLCanvasElement);
    get canvasElement(): HTMLCanvasElement;
    get ctx(): CanvasRenderingContext2D;
    set ctx(value: CanvasRenderingContext2D);
    get origin(): Vector3;
    set origin(value: Vector3);
    get width(): number;
    get height(): number;
    abstract clearCanvas(): void;
    abstract autoResize(ratio?: number): void;
}
