import { Vector3 } from '../../geometry/Vector3';
import { Color } from '../../utils/Color';
import { Renderer } from './Renderer';
export declare abstract class Scene {
    private _renderer;
    private _canvasBgColor;
    constructor();
    get renderer(): Renderer;
    set renderer(value: Renderer);
    get canvasBgColor(): Color;
    set canvasBgColor(value: Color);
    abstract setCanvasOrigin(origin: Vector3): any;
    abstract addPlaneItem(...args: any): any;
    abstract deletePlaneItem(...args: any): any;
    abstract render(...args: any): any;
}
