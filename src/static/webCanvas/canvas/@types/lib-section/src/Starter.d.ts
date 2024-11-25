import { Scene } from './engine/common/Scene';
import { DrawToolManager } from './tool/draw/DrawToolManager';
import { EventsLoader } from './tool/EventsLoader';
import { FrameTool } from './tool/FrameTool';
import { FPSCount } from './utils/FPSCount';
export declare function layerInit(): void;
export declare function toolInit(canvasElement: HTMLCanvasElement): {
    eventsLoader: EventsLoader;
    frameTool: FrameTool;
    drawToolManager: DrawToolManager;
};
export declare function coreInit(): Promise<void>;
export declare function envirInit(canvasElement: HTMLCanvasElement): Promise<void>;
export declare class Starter {
    fpsCount: FPSCount;
    private _scene;
    private _isShouldHandleElementsFirst;
    private _isShouldUpdateCanvasView;
    private _layerPresenter;
    private _elementPresenter;
    private _canvasElement;
    constructor(canvasElement: HTMLCanvasElement);
    init(): Promise<void>;
    get scene(): Scene;
    renderFrame(timeStamp: number): void;
}
export declare function resetCanvasContent(): Promise<void>;
