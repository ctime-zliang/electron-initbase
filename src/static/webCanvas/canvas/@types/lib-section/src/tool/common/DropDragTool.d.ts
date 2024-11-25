import { InputInfo } from '../InputInfo';
import { Tool } from '../Tool';
export declare class DropDragTool extends Tool<InputInfo> {
    constructor();
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
