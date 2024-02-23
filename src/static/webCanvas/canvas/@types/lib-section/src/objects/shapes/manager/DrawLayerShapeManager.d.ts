import { Manager } from '../../base/Manage';
import { DrawLayerShape } from '../items/DrawLayerShape';
export declare class DrawLayerShapeManager extends Manager<DrawLayerShape> {
    private static thisInstance;
    static getInstance(): DrawLayerShapeManager;
    private _selectedLayersId;
    constructor();
    get selectedLayersId(): Set<string>;
    set selectedLayersId(value: Set<string>);
    createControlShapeItem(layerItemName: string): DrawLayerShape;
    createContentShapeItem(layerItemName: string): DrawLayerShape;
    deleteContentShapeItem(layerItemId: string): void;
    getAllContentShapeItems(): Array<DrawLayerShape>;
    getContentShapeItem(layerItemId: string): DrawLayerShape;
    getActiveItem(): DrawLayerShape;
    setActiveItem(layerItemId: string): void;
    private addCache;
    private deleteCache;
}
