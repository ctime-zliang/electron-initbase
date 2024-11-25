import { EDrawLayerType } from '../../../../config/DrawLayerProfile';
export declare class DrawLayerBaseItemModel {
    private _layerItemType;
    private _layerItemName;
    private _layerItemOpacity;
    private _groupId;
    private _layerItemId;
    constructor(layerItemId: string, layerItemName: string, layerItemType: EDrawLayerType);
    get layerItemType(): number;
    set layerItemType(value: number);
    get layerItemName(): string;
    set layerItemName(value: string);
    get layerItemOpacity(): number;
    set layerItemOpacity(value: number);
    get groupId(): string | undefined;
    set groupId(value: string | undefined);
    get layerItemId(): string;
    set layerItemId(value: string);
}
