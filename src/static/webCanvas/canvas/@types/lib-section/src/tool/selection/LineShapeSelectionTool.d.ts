import { LineShape } from '../../objects/shapes/items/LineShape';
import { TAllElementShapeType } from '../../types/Element';
import { InputInfo } from '../InputInfo';
import { SelectionTool } from './base/SelectionTool';
export declare class LineShapeSelectionTool extends SelectionTool {
    private _commandGroupId;
    private _shapeItemCommand;
    private _isCreatedCommand;
    private _selectedItem;
    private _initSelectedItemJSONData;
    private _movePhysicsX;
    private _movePhysicsY;
    private _lineStartPoint;
    private _lineEndPoint;
    private _isSelectedStartPoint;
    private _isSelectedEndPoint;
    constructor(selectedItem: LineShape);
    mouseLeftDownSelect(inputInfo: InputInfo): TAllElementShapeType;
    keyDownHandler(inputInfo: InputInfo): void;
    keyUpHandler(inputInfo: InputInfo): void;
    mouseLeftDownHandler(inputInfo: InputInfo): void;
    mouseLeftUpHandler(inputInfo: InputInfo): void;
    mouseMoveHandler(inputInfo: InputInfo): void;
    mouseUpMoveHandler(inputInfo: InputInfo): void;
    clear(): void;
    private moveSelectedItem;
}
