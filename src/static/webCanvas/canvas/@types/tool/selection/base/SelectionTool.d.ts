import { Vector2 } from '../../../geometry/Vector2';
import { TAllElementShapeType, TElementShapeType } from '../../../types/Element';
import { InputInfo } from '../../InputInfo';
export declare abstract class SelectionTool {
    private _selectedItems;
    private _moveStartPosition;
    private _lastPosition;
    constructor();
    set selectedItems(value: Array<TElementShapeType>);
    get selectedItems(): Array<TElementShapeType>;
    protected set moveStartPosition(value: Vector2);
    protected get moveStartPosition(): Vector2;
    protected set lastPosition(value: Vector2);
    protected get lastPosition(): Vector2;
    abstract mouseLeftDownSelect(inputInfo: InputInfo): TAllElementShapeType;
    abstract keyDownHandler(inputInfo: InputInfo): void;
    abstract keyUpHandler(inputInfo: InputInfo): void;
    abstract mouseLeftDownHandler(inputInfo: InputInfo): void;
    abstract mouseLeftUpHandler(inputInfo: InputInfo): void;
    abstract mouseMoveHandler(inputInfo: InputInfo): void;
    abstract mouseUpMoveHandler(inputInfo: InputInfo): void;
    abstract clear(): void;
}
