import { TDrawLayerItemResult } from '../types/Common';
export declare class DrawLayerController {
    constructor();
    /**
     * 获取所有绘制图层结果
     */
    getAllDrawLayerResults(): Array<TDrawLayerItemResult>;
    /**
     * 创建单个绘制图层
     */
    createDrawLayerShapeItem(layerItemName?: string): string;
    /**
     * 删除单个绘制图层
     */
    deleteDrawLayerShapeItem(layerItemId: string): void;
    /**
     * 获取第一个被选中的绘制图层的图层 ID
     */
    getActiveDrawLayerShapeItemId(): string;
    /**
     * 设置指定图层 ID 对应的图层为选中状态
     */
    setActiveDrawLayerShapeItem(layerItemId: string): void;
    /**
     * 清除所有选中的绘制图层的选中状态
     */
    clearAllSelectedDrawLayers(): void;
    /**
     * 删除指定图层 ID 对应的绘制图层中的所有图元
     */
    deleteDrawLayerElements(layerItemId: string): void;
}
