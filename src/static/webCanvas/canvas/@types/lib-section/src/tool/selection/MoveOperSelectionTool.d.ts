import { TAllElementShapeType } from '../../types/Element';
import { InputInfo } from '../InputInfo';
import { SelectionTool } from './base/SelectionTool';
export declare class MoveOperSelectionTool extends SelectionTool {
    private _commandGroupId;
    private _shapeItemCommands;
    private _isCreatedCommand;
    private _initSelectedItemJSONDatas;
    private _movePhysicsX;
    private _movePhysicsY;
    constructor();
    mouseLeftDownSelect(inputInfo: InputInfo): TAllElementShapeType;
    keyDownHandler(inputInfo: InputInfo): void;
    keyUpHandler(inputInfo: InputInfo): void;
    mouseLeftDownHandler(inputInfo: InputInfo): void;
    mouseLeftUpHandler(inputInfo: InputInfo): void;
    mouseMoveHandler(inputInfo: InputInfo): void;
    mouseUpMoveHandler(inputInfo: InputInfo): void;
    clear(): void;
    private moveSelectedItems;
}
