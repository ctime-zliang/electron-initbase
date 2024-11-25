import { Vector3 } from '../geometry/Vector3';
export declare class CanvasController {
    private _camera;
    constructor();
    /**
     * 按指定中心点缩放画布
     */
    zoomCanvas(ratio: number, zoomCenterVector3?: Vector3): void;
}
