import { LineShape } from '../../../objects/shapes/items/LineShape';
import { ECommandAction } from './Config';
import { ElementCommand } from './ElementCommand';
export declare class LineShapeCommand extends ElementCommand {
    private _elementItemId;
    constructor(elementItem: LineShape, groupId: string, action: ECommandAction);
    protected modify(): void;
    protected rebuild(): void;
    protected delete(): void;
}
