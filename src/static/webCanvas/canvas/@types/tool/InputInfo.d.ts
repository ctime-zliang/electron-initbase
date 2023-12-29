import { T2DCoordinatePositionDot } from '../types/Common';
export declare abstract class InputContext {
    private _type;
    private _keyCode;
    /**
     * 鼠标按下时的坐标(像素)(相对于 <canvas />  所占区域的左上角)
     */
    private _leftDownSourcePixelX;
    private _leftDownSourcePixelY;
    private _middleDownSourcePixelX;
    private _middleDownSourcePixelY;
    private _rightDownSourcePixelX;
    private _rightDownSourcePixelY;
    /**
     * 鼠标任意时刻的坐标(像素)(相对于 <canvas />  所占区域的左上角)
     */
    private _moveSourcePixelX;
    private _moveSourcePixelY;
    private _deltaSourcePixelX;
    private _deltaSourcePixelY;
    /**
     * 鼠标按下时的坐标(像素)(相对于画布原点)
     */
    private _leftDownTransPixelX;
    private _leftDownTransPixelY;
    private _middleDownTransPixelX;
    private _middleDownTransPixelY;
    private _rightDownTransPixelX;
    private _rightDownTransPixelY;
    /**
     * 鼠标任意时刻的坐标(像素)(相对于画布原点)
     */
    private _moveTransPixelX;
    private _moveTransPixelY;
    /**
     * 鼠标按下时的坐标(物理单位)(相对于画布原点)
     * 		在开启吸附网点设置下会自动修正为最近的网点坐标
     */
    private _leftDownAbsoluteX;
    private _leftDownAbsoluteY;
    private _middleDownAbsoluteX;
    private _middleDownAbsoluteY;
    private _rightDownAbsoluteX;
    private _rightDownAbsoluteY;
    /**
     * 鼠标任意时刻的坐标(物理单位)(相对于画布原点)
     * 		在开启吸附网点设置下会自动修正为最近的网点坐标
     */
    private _moveAbsoluteX;
    private _moveAbsoluteY;
    /**
     * 鼠标按下时的坐标(物理单位)(相对于画布原点)
     */
    private _leftDownRealAbsoluteX;
    private _leftDownRealAbsoluteY;
    private _middleDownRealAbsoluteX;
    private _middleDownRealAbsoluteY;
    private _rightDownRealAbsoluteX;
    private _rightDownRealAbsoluteY;
    /**
     * 鼠标任意时刻的坐标(物理单位)(相对于画布原点)
     */
    private _moveRealAbsoluteX;
    private _moveRealAbsoluteY;
    private _shiftKey;
    private _ctrlKey;
    private _altKey;
    private _metaKey;
    private _rightMouseDown;
    private _middleMouseDown;
    private _leftMouseDown;
    private _mouseTimeStamp;
    constructor();
    get type(): string;
    set type(value: string);
    get keyCode(): number;
    set keyCode(value: number);
    /************************************************************/
    /************************************************************/
    get leftDownSourcePixelX(): number;
    set leftDownSourcePixelX(value: number);
    get leftDownSourcePixelY(): number;
    set leftDownSourcePixelY(value: number);
    get middleDownSourcePixelX(): number;
    set middleDownSourcePixelX(value: number);
    get middleDownSourcePixelY(): number;
    set middleDownSourcePixelY(value: number);
    get rightDownSourcePixelX(): number;
    set rightDownSourcePixelX(value: number);
    get rightDownSourcePixelY(): number;
    set rightDownSourcePixelY(value: number);
    /************************************************************/
    /************************************************************/
    get moveSourcePixelX(): number;
    set moveSourcePixelX(value: number);
    get moveSourcePixelY(): number;
    set moveSourcePixelY(value: number);
    /************************************************************/
    /************************************************************/
    get deltaSourcePixelX(): number;
    set deltaSourcePixelX(value: number);
    get deltaSourcePixelY(): number;
    set deltaSourcePixelY(value: number);
    /************************************************************/
    /************************************************************/
    get leftDownTransPixelX(): number;
    set leftDownTransPixelX(value: number);
    get leftDownTransPixelY(): number;
    set leftDownTransPixelY(value: number);
    get middleDownTransPixelX(): number;
    set middleDownTransPixelX(value: number);
    get middleDownTransPixelY(): number;
    set middleDownTransPixelY(value: number);
    get rightDownTransPixelX(): number;
    set rightDownTransPixelX(value: number);
    get rightDownTransPixelY(): number;
    set rightDownTransPixelY(value: number);
    /************************************************************/
    /************************************************************/
    get moveTransPixelX(): number;
    set moveTransPixelX(value: number);
    get moveTransPixelY(): number;
    set moveTransPixelY(value: number);
    /************************************************************/
    /************************************************************/
    get leftDownAbsoluteX(): number;
    set leftDownAbsoluteX(value: number);
    get leftDownAbsoluteY(): number;
    set leftDownAbsoluteY(value: number);
    get middleDownAbsoluteX(): number;
    set middleDownAbsoluteX(value: number);
    get middleDownAbsoluteY(): number;
    set middleDownAbsoluteY(value: number);
    get rightDownAbsoluteX(): number;
    set rightDownAbsoluteX(value: number);
    get rightDownAbsoluteY(): number;
    set rightDownAbsoluteY(value: number);
    /************************************************************/
    /************************************************************/
    get moveAbsoluteX(): number;
    set moveAbsoluteX(value: number);
    /************************************************************/
    /************************************************************/
    get leftDownRealAbsoluteX(): number;
    set leftDownRealAbsoluteX(value: number);
    get leftDownRealAbsoluteY(): number;
    set leftDownRealAbsoluteY(value: number);
    get middleDownRealAbsoluteX(): number;
    set middleDownRealAbsoluteX(value: number);
    get middleDownRealAbsoluteY(): number;
    set middleDownRealAbsoluteY(value: number);
    get rightDownRealAbsoluteX(): number;
    set rightDownRealAbsoluteX(value: number);
    get rightDownRealAbsoluteY(): number;
    set rightDownRealAbsoluteY(value: number);
    /************************************************************/
    /************************************************************/
    get moveAbsoluteY(): number;
    set moveAbsoluteY(value: number);
    get moveRealAbsoluteX(): number;
    set moveRealAbsoluteX(value: number);
    get moveRealAbsoluteY(): number;
    set moveRealAbsoluteY(value: number);
    /************************************************************/
    /************************************************************/
    get shiftKey(): boolean;
    set shiftKey(value: boolean);
    get ctrlKey(): boolean;
    set ctrlKey(value: boolean);
    get altKey(): boolean;
    set altKey(value: boolean);
    get metaKey(): boolean;
    set metaKey(value: boolean);
    /************************************************************/
    /************************************************************/
    get rightMouseDown(): boolean;
    set rightMouseDown(value: boolean);
    get middleMouseDown(): boolean;
    set middleMouseDown(value: boolean);
    get leftMouseDown(): boolean;
    set leftMouseDown(value: boolean);
    /************************************************************/
    /************************************************************/
    get mouseTimeStamp(): number;
    set mouseTimeStamp(value: number);
}
export declare class InputInfo extends InputContext {
    private _pointer;
    constructor();
    get pointer(): Array<T2DCoordinatePositionDot>;
    set pointer(value: Array<T2DCoordinatePositionDot>);
    toJSON(): any;
}
