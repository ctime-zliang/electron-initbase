import { DrawLayerShapeItemBase } from '../objects/shapes/items/drawLayerBase/DrawLayerShapeItemBase';
import { ElementShapeItemBase } from '../objects/shapes/items/elementBase/ElementShapeItemBase';
import { TElementShapeType } from '../types/Element';
export declare class Helper {
    /**
     * 获取画布内所有图元
     */
    static getAllElementShapes(): Array<TElementShapeType>;
    /**
     * 获取画布内指定图元 ID 对应的图元
     */
    static getElementShapeItemById(elementItemId: string): TElementShapeType;
    /**
     * 获取画布内所有绘制图层
     */
    static getAllDrawLayerShapes(): Array<DrawLayerShapeItemBase>;
    /**
     * 删除画布内指定图元
     */
    static deleteElementItem(elementItem: ElementShapeItemBase): void;
    /**
     * 检测传入的图元 ID 是否合法
     */
    static checkDrawLayer(drawLayerItemId: string): {
        check: boolean;
        title: string;
    };
}
