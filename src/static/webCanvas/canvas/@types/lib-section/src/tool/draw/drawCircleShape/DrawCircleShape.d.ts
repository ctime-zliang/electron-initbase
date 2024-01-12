import { CircleShape } from '../../../objects/shapes/items/CircleShape';
import { DrawLayerShape } from '../../../objects/shapes/items/DrawLayerShape';
import { InputInfo } from '../../InputInfo';
export declare class DrawCircleShape {
    private _shapeInstances;
    private _selectedDrawLayerShapeItem;
    constructor();
    get shapeInstances(): Array<CircleShape>;
    set shapeInstances(value: Array<CircleShape>);
    get selectedDrawLayerShapeItem(): DrawLayerShape;
    set selectedDrawLayerShapeItem(value: DrawLayerShape);
    completeDraw(): void;
    cancelDraw(): void;
    updateShapes(inputInfo: InputInfo): void;
    createShapes(x: number, y: number): void;
    destoryShapes(): void;
}
