import { Renderer } from '../../common/Renderer';
export declare class RendererCanvas extends Renderer {
    constructor(canvasElement: HTMLCanvasElement);
    clearCanvas(): void;
    autoResize(ratio?: number): void;
}
