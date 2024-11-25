import { RtreeItem } from '../RtreeItem';
import { TRtreeNodeItem, TSimpleRect } from './Types';
export declare class RTree {
    private _root;
    private _minWidth;
    private _maxWidth;
    private _allItems;
    private _getWidth;
    constructor(width?: number);
    refresh(): void;
    insertSubtree(handleNode: TRtreeNodeItem, targetRoot: TRtreeNodeItem): void;
    insertItemData(rect: TSimpleRect, data: any): void;
    search(rect: TSimpleRect, isGetNodeDataOnly: boolean): Array<TRtreeNodeItem>;
    removeArea(rect: TSimpleRect, balanceChildrenOnDeleting?: boolean): Array<TRtreeNodeItem>;
    removeTarget(rect: TSimpleRect, targetOnLeaf: any, balanceChildrenOnDeleting?: boolean): Array<TRtreeNodeItem>;
    getTree(): TRtreeNodeItem;
    setTree(newTree: TRtreeNodeItem, targetRoot: TRtreeNodeItem): TRtreeNodeItem;
    getAllItems(): Set<RtreeItem>;
    clearAllItems(): void;
}
