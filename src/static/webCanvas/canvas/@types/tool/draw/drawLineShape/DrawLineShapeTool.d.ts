import { CrossAssist } from '../../auxiliary/CrossAssist';
import { InputInfo } from '../../InputInfo';
import { Tool } from '../../Tool';
export declare class DrawLineShapeTool extends Tool<InputInfo> {
    private _drawTargetShape;
    private _isDrawing;
    private _hasMoveWhenAfterRightDown;
    private _crossAssist;
    constructor();
    initAuxiliaryTools(): CrossAssist;
    keyDownHandler(inputInfo: InputInfo): void;
    keyUpHandler(inputInfo: InputInfo): void;
    mouseLeftDownHandler(inputInfo: InputInfo): void;
    mouseMiddleDownHandler(inputInfo: InputInfo): void;
    mouseRightDownHandler(inputInfo: InputInfo): void;
    mouseMoveHandler(inputInfo: InputInfo): void;
    mouseLeftUpHandler(inputInfo: InputInfo): void;
    mouseMiddleUpHandler(inputInfo: InputInfo): void;
    mouseRightUpHandler(inputInfo: InputInfo): void;
    mouseWheelHandler(inputInfo: InputInfo): void;
    mouseLeaveHandler(inputInfo: InputInfo): void;
    mouseEnterHandler(inputInfo: InputInfo): void;
}
