import { ECommandAction } from '../tool/history/command/Config';
export declare class OperationController {
    constructor();
    addHistroyRecord(elementItemId: string, action: ECommandAction, groupId?: string): void;
    undo(): void;
    redo(): void;
    hasHistoryUndoRecord(): boolean;
    hasHistoryRedoRecord(): boolean;
    resetCanvasContent(): Promise<any>;
    resetCanvasView(): void;
}
