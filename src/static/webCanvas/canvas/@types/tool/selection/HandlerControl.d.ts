import { InputInfo } from '../InputInfo';
export declare class HandlerControl {
    private _processor;
    constructor();
    hasProcessor(): boolean;
    clearProcessor(): void;
    updateProcessor(inputInfo: InputInfo): void;
    mouseLeftDownHandler(inputInfo: InputInfo): void;
    mouseLeftUpHandler(inputInfo: InputInfo): void;
    mouseMoveHandler(inputInfo: InputInfo): void;
}
