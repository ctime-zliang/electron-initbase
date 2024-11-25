import { ECoreEngineType } from '../../config/CfgProfile';
import { Scene } from './Scene';
export declare function createScene(engineType: ECoreEngineType, canvasElement: HTMLCanvasElement): Promise<Scene>;
