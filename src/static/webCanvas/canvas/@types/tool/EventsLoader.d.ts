import { InputInfo } from './InputInfo';
import { ToolChain } from './ToolChain';
export declare class EventsLoader extends ToolChain<InputInfo> {
    private readonly _canvasElement;
    private readonly _inputInfo;
    private readonly _systemConfig;
    constructor(canvasElement: HTMLCanvasElement);
    init(): void;
    get inputInfo(): InputInfo;
    get canvasElement(): HTMLCanvasElement;
    getWindowRatio(ratio?: number): number;
    bindEvent(): void;
    private viewResizeHandler;
    private prepareSystemEventInputInfo;
    private prepareKeyboardEventInputInfo;
    private keyDownHandler;
    private keyUpHandler;
    private mouseDownHandler;
    private mouseMoveHandler;
    private mouseUpHandler;
    private mouseWheelHandler;
    private mouseLeaveHandler;
    private mouseEnterHandler;
    private contextmenuHandler;
    private calcTransPixelInputInfo;
}
