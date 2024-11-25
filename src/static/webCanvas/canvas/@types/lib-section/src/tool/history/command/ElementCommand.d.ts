import { Command } from './Command';
import { ECommandAction } from './Config';
export declare abstract class ElementCommand extends Command {
    private _action;
    private _itemData;
    constructor(groupId: string, action: ECommandAction);
    get action(): ECommandAction;
    set action(value: ECommandAction);
    get itemData(): any;
    set itemData(value: any);
    undo(): void;
    redo(): void;
}
