import { CircleShape } from '../../../objects/shapes/items/CircleShape';
import { ECommandAction } from './Config';
import { ElementCommand } from './ElementCommand';
export declare class CircleShapeCommand extends ElementCommand {
    private _elementItemId;
    constructor(elementItem: CircleShape, groupId: string, action: ECommandAction);
    protected modify(): void;
    protected rebuild(): void;
    protected delete(): void;
}
