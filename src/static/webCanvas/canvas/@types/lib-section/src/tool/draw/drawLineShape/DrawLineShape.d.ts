import { DrawLayerShape } from '../../../objects/shapes/items/DrawLayerShape';
import { LineShape } from '../../../objects/shapes/items/LineShape';
import { InputInfo } from '../../InputInfo';
export declare class DrawLineShape {
    private _shapeInstances;
    private _selectedDrawLayerShapeItem;
    constructor();
    get shapeInstances(): Array<LineShape>;
    set shapeInstances(value: Array<LineShape>);
    get selectedDrawLayerShapeItem(): DrawLayerShape;
    set selectedDrawLayerShapeItem(value: DrawLayerShape);
    completeDraw(): Array<LineShape>;
    cancelDraw(): void;
    updateShapes(inputInfo: InputInfo): void;
    createShapes(x: number, y: number): void;
    destoryShapes(): void;
}
