import { ElementShapeItemBase } from '../objects/shapes/items/elementBase/ElementShapeItemBase';
import { InputInfo } from '../tool/InputInfo';
import { Manager } from '../objects/base/Manage';
export declare class SelectManager extends Manager<ElementShapeItemBase> {
    private _selectionBoxLines;
    private _isBoxSelection;
    private _leftDownRealPhysicsX;
    private _leftDownRealPhysicsY;
    constructor();
    getAllSelectItems(): Array<ElementShapeItemBase>;
    clearAllSelectItems(): void;
    keyDownHandler(inputInfo: InputInfo): void;
    keyUpHandler(inputInfo: InputInfo): void;
    mouseLeftDownHandler(inputInfo: InputInfo): void;
    mouseMiddleDownHandler(inputInfo: InputInfo): void;
    mouseRightDownHandler(inputInfo: InputInfo): void;
    mouseLeftUpHandler(inputInfo: InputInfo): void;
    mouseMoveHandler(inputInfo: InputInfo): void;
    private pointSelect;
    private boxSelect;
    private setSelectStatus;
    private updateSelectionBox;
    private destorySelectionBox;
}
