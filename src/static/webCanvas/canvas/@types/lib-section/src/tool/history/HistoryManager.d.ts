import { Command } from './command/Command';
export declare class HistoryManager {
    private _commands;
    private _index;
    private _limit;
    private _isExecuting;
    private _callback;
    constructor(limit?: number);
    get index(): number;
    set index(value: number);
    get isExecuting(): boolean;
    private execute;
    add(command: Command): HistoryManager;
    setCallback(callback: () => void | null): HistoryManager;
    undo(): HistoryManager;
    redo(): HistoryManager;
    clear(): void;
    hasUndo(): boolean;
    hasRedo(): boolean;
    getCommands(groupId: string): Array<any>;
}
