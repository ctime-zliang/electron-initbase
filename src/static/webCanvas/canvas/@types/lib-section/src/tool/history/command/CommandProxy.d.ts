import { ECommandAction } from './Config';
import { ElementCommand } from './ElementCommand';
export declare class CommandProxy {
    static getCommandInstance(elementItemId: string, action: ECommandAction, groupId?: string): ElementCommand;
}
