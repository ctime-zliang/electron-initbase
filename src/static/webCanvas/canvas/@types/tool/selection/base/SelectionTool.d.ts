import { Vector2 } from '../../../geometry/Vector2';
import { InputInfo } from '../../InputInfo';
export declare abstract class SelectionTool {
    private _moveStartPosition;
    private _lastPosition;
    constructor();
    protected set moveStartPosition(value: Vector2);
    protected get moveStartPosition(): Vector2;
    protected set lastPosition(value: Vector2);
    protected get lastPosition(): Vector2;
    abstract mouseLeftDownHandler(inputInfo: InputInfo): void;
    abstract mouseLeftUpHandler(inputInfo: InputInfo): void;
    abstract mouseMoveHandler(inputInfo: InputInfo): void;
}
