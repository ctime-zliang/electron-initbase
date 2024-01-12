import { TVector3JSONData } from '../../geometry/Vector3';
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
    abstract setCanvasOrigin(originData: TVector3JSONData): any;
    abstract addPlaneItem(...args: any): any;
    abstract deletePlaneItem(...args: any): any;
    abstract render(...args: any): any;
}
