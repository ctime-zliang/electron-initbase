import { InputInfo } from './InputInfo';
import { ToolChain } from './ToolChain';
export declare abstract class Tool<T> extends ToolChain<T> {
    private _drawing;
    constructor();
    get drawing(): boolean;
    set drawing(value: boolean);
    handler(process: (tool: Tool<T>) => void): void;
    viewResizeHandler(inputInfo: InputInfo, offset?: any): void;
    abstract keyDownHandler(inputInfo: InputInfo): void;
    abstract keyUpHandler(inputInfo: InputInfo): void;
    abstract mouseLeftDownHandler(inputInfo: InputInfo): void;
    abstract mouseMiddleDownHandler(inputInfo: InputInfo): void;
    abstract mouseRightDownHandler(inputInfo: InputInfo): void;
    abstract mouseMoveHandler(inputInfo: InputInfo): void;
    abstract mouseLeftUpHandler(inputInfo: InputInfo): void;
    abstract mouseMiddleUpHandler(inputInfo: InputInfo): void;
    abstract mouseRightUpHandler(inputInfo: InputInfo): void;
    abstract mouseWheelHandler(inputInfo: InputInfo): void;
    abstract mouseLeaveHandler(inputInfo: InputInfo): void;
    abstract mouseEnterHandler(inputInfo: InputInfo): void;
}
