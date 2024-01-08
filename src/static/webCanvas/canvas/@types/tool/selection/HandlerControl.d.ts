import { InputInfo } from '../InputInfo';
import { TElementShapeType } from '../../types/Element';
export declare class HandlerControl {
    private _processor;
    constructor();
    mouseLeftDownSelect(inputInfo: InputInfo): TElementShapeType;
    hasProcessor(): boolean;
    clearProcessor(): void;
    updateProcessor(inputInfo: InputInfo, clickSelect: TElementShapeType): void;
    keyDownHandler(inputInfo: InputInfo): void;
    keyUpHandler(inputInfo: InputInfo): void;
    mouseLeftDownHandler(inputInfo: InputInfo): void;
    mouseLeftUpHandler(inputInfo: InputInfo): void;
    mouseMoveHandler(inputInfo: InputInfo): void;
    mouseUpMoveHandler(inputInfo: InputInfo): void;
}
