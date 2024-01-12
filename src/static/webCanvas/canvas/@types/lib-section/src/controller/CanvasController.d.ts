import { Vector3 } from '../geometry/Vector3';
export declare class CanvasController {
    private _camera;
    constructor();
    zoomCanvas(ratio: number, zoomCenterVector3?: Vector3): void;
}
