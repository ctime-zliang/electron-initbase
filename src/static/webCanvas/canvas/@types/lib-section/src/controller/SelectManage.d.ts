import { ElementShapeItemBase } from '../objects/shapes/items/elementBase/ElementShapeItemBase';
import { InputInfo } from '../tool/InputInfo';
import { Manager } from '../objects/base/Manage';
export declare class SelectManager extends Manager<ElementShapeItemBase> {
    private _selectionBoxLines;
    private _isBoxSelection;
    private _leftDownRealPhysicsX;
    private _leftDownRealPhysicsY;
    constructor();
    /**
     * 获取所有被选中的图元
     */
    getAllSelectItems(): Array<ElementShapeItemBase>;
    /**
     * 清除所有选中图元的记录
     */
    clearAllSelectItems(): void;
    /**
     * 在所有选中图元记录中删除指定图元 ID 对应的图元
     */
    clearSelectItemById(elementItemId: string): void;
    keyDownHandler(inputInfo: InputInfo): void;
    keyUpHandler(inputInfo: InputInfo): void;
    mouseLeftDownHandler(inputInfo: InputInfo): void;
    mouseMiddleDownHandler(inputInfo: InputInfo): void;
    mouseRightDownHandler(inputInfo: InputInfo): void;
    mouseLeftUpHandler(inputInfo: InputInfo): void;
    mouseMoveHandler(inputInfo: InputInfo): void;
    /**
     * 获取点选图元集合(已过滤)
     */
    private pointSelect;
    /**
     * 获取框选图元集合(已过滤)
     */
    private boxSelect;
    /**
     * 设置图元的选中样式
     * 		添加进选中图元集合
     * 		设置图元的选中样式
     */
    private setSelectStatus;
    /**
     * 创建或更新框选辅助虚线框
     */
    private updateSelectionBox;
    /**
     * 销毁框选辅助虚线框
     */
    private destorySelectionBox;
}
