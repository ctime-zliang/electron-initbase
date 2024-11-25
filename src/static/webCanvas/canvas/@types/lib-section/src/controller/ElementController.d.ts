import { TCanvasLineCap } from '../types/Common';
import { Color } from '../utils/Color';
import { TElementJSONBaseData } from '../types/ElementViewType';
export declare class ElementController {
    constructor();
    /**
     * 获取画布内所有图元结果
     */
    getAllElementResults(): Array<TElementJSONBaseData>;
    /**
     * 获取画布内所有被选中的图元结果
     */
    getAllSelectedElementResults(): Array<TElementJSONBaseData>;
    /**
     * 创建 Line-Shape
     */
    createLineShapeItem(layerItemId: string, startX: number, startY: number, endX: number, endY: number, strokeWidth?: number, strokeColor?: Color): string;
    /**
     * 创建 Circle-Shape
     */
    createCircleShapeItem(layerItemId: string, centerX: number, centerY: number, radius: number, strokeWidth: number, strokeColor?: Color, fillColor?: Color): string;
    /**
     * 设置图元结构线线宽颜色
     */
    setElementItemStrokeColor(elementItemId: string, color: Color): void;
    /**
     * 设置图元填充颜色
     */
    setElementItemFillColor(elementItemId: string, color: Color): void;
    /**
     * 设置图元结构线端点圆角样式
     */
    setElementItemLineCap(elementItemId: string, lineCap: TCanvasLineCap): void;
    /**
     * 设置图元名称
     */
    setElementItemName(elementItemId: string, elementItemName: string): void;
    /**
     * 删除指定图元 ID 对应的图元
     */
    deleteShapeItemById(elementItemId: string): void;
}
