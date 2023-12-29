import { Vector3 } from '../../geometry/Vector3';
import { Plane } from '../common/Plane';
import { Scene } from '../common/Scene';
export declare class SceneCanvas extends Scene {
    private _gridCanvas;
    private _contentPlanes;
    private _controlPlanes;
    constructor(canvasElement: HTMLCanvasElement);
    setCanvasOrigin(origin: Vector3): void;
    addPlaneItem(planeId: string): Plane<SceneCanvas>;
    deletePlaneItem(planeId: string): void;
    render(timestamp: number): void;
}
