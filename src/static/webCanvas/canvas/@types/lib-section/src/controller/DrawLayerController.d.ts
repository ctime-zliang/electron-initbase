import { DrawLayerShape } from '../objects/shapes/items/DrawLayerShape';
import { TDrawLayerItemResult } from '../types/Common';
export declare class DrawLayerController {
    constructor();
    getAllDrawLayerResults(): Array<TDrawLayerItemResult>;
    createLayerShapeItem(layerItemName?: string): string;
    deleteLayerShapeItem(layerItemId: string): void;
    getActiveLayerShapeItem(): DrawLayerShape;
    setActiveLayerShapeItem(layerItemId: string): void;
    clearAllSelectedDrawLayers(): void;
    deleteDrawLayerElements(layerItemId: string): void;
}
