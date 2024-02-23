import { TElementAssistCircleJSONData, TElementAssistLineJSONData, TElementCircleJSONData, TElementLineJSONData } from '../../types/ElementViewType';
export declare abstract class Plane<T> {
    private _planeId;
    private _scene;
    constructor(sceneInstance: T, planeId: string);
    protected get scene(): T;
    get planeId(): string;
    abstract addLineItems(v: Map<string, TElementLineJSONData>): void;
    abstract updateLineItems(v: Map<string, TElementLineJSONData>): void;
    abstract deleteLineItems(v: Set<string>): void;
    abstract addCircleItems(v: Map<string, TElementCircleJSONData>): void;
    abstract updateCircleItems(v: Map<string, TElementCircleJSONData>): void;
    abstract deleteCircleItems(v: Set<string>): void;
    abstract addAssistLineItems(v: Map<string, TElementAssistLineJSONData>): void;
    abstract updateAssistLineItems(v: Map<string, TElementAssistLineJSONData>): void;
    abstract deleteAssistLineItems(v: Set<string>): void;
    abstract addAssistCircleItems(v: Map<string, TElementAssistCircleJSONData>): void;
    abstract updateAssistCircleItems(v: Map<string, TElementAssistCircleJSONData>): void;
    abstract deleteAssistCircleItems(v: Set<string>): void;
    abstract render(ctx: any): void;
}
