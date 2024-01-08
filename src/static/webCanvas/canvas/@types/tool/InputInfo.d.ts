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
    private _leftDownPhysicsX;
    private _leftDownPhysicsY;
    private _middleDownPhysicsX;
    private _middleDownPhysicsY;
    private _rightDownPhysicsX;
    private _rightDownPhysicsY;
    /**
     * 鼠标任意时刻的坐标(物理单位)(相对于画布原点)
     * 		在开启吸附网点设置下会自动修正为最近的网点坐标
     */
    private _movePhysicsX;
    private _movePhysicsY;
    /**
     * 鼠标按下时的坐标(物理单位)(相对于画布原点)
     */
    private _leftDownRealPhysicsX;
    private _leftDownRealPhysicsY;
    private _middleDownRealPhysicsX;
    private _middleDownRealPhysicsY;
    private _rightDownRealPhysicsX;
    private _rightDownRealPhysicsY;
    /**
     * 鼠标任意时刻的坐标(物理单位)(相对于画布原点)
     */
    private _moveRealPhysicsX;
    private _moveRealPhysicsY;
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
    get leftDownPhysicsX(): number;
    set leftDownPhysicsX(value: number);
    get leftDownPhysicsY(): number;
    set leftDownPhysicsY(value: number);
    get middleDownPhysicsX(): number;
    set middleDownPhysicsX(value: number);
    get middleDownPhysicsY(): number;
    set middleDownPhysicsY(value: number);
    get rightDownPhysicsX(): number;
    set rightDownPhysicsX(value: number);
    get rightDownPhysicsY(): number;
    set rightDownPhysicsY(value: number);
    /************************************************************/
    /************************************************************/
    get movePhysicsX(): number;
    set movePhysicsX(value: number);
    /************************************************************/
    /************************************************************/
    get leftDownRealPhysicsX(): number;
    set leftDownRealPhysicsX(value: number);
    get leftDownRealPhysicsY(): number;
    set leftDownRealPhysicsY(value: number);
    get middleDownRealPhysicsX(): number;
    set middleDownRealPhysicsX(value: number);
    get middleDownRealPhysicsY(): number;
    set middleDownRealPhysicsY(value: number);
    get rightDownRealPhysicsX(): number;
    set rightDownRealPhysicsX(value: number);
    get rightDownRealPhysicsY(): number;
    set rightDownRealPhysicsY(value: number);
    /************************************************************/
    /************************************************************/
    get movePhysicsY(): number;
    set movePhysicsY(value: number);
    get moveRealPhysicsX(): number;
    set moveRealPhysicsX(value: number);
    get moveRealPhysicsY(): number;
    set moveRealPhysicsY(value: number);
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
