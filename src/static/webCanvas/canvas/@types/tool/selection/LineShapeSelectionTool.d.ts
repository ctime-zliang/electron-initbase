import { InputInfo } from '../InputInfo';
import { SelectionTool } from './base/SelectionTool';
export declare class LineShapeSelectionTool extends SelectionTool {
    private _moveAbsoluteX;
    private _moveAbsoluteY;
    constructor();
    mouseLeftDownHandler(inputInfo: InputInfo): void;
    mouseLeftUpHandler(inputInfo: InputInfo): void;
    mouseMoveHandler(inputInfo: InputInfo): void;
}
