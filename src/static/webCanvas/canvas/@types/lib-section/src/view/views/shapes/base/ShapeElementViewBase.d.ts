import { Context } from '../../../../utils/Context';
import { DrawLayerView } from '../DrawLayerView';
export declare abstract class ShapeElementViewBase extends Context {
    private _id;
    constructor(id: string);
    get id(): string;
    set id(value: string);
    abstract modify(elementStatus: any, elementItemData: any): any;
    abstract delete(...args: any): any;
    abstract hightlighting(...args: any): any;
    abstract normalview(...args: any): any;
    getDrawLayerViewItem(layerItemId: string): DrawLayerView;
    get visible(): boolean;
    set visible(value: boolean);
    get hightlight(): boolean;
    set hightlight(value: boolean);
    get locked(): boolean;
    set locked(value: boolean);
    get killed(): boolean;
    set killed(value: boolean);
}
