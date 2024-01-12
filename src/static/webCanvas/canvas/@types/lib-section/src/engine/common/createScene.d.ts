import { Scene } from './Scene';
export declare enum EEngineType {
    CANVAS = "CANVAS"
}
export declare function createScene(type: EEngineType, canvasElement: HTMLCanvasElement): Promise<Scene>;
