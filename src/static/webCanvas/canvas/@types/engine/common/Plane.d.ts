import { TElementAssistCircleViewRenderData, TElementAssistLineViewRenderData, TElementCircleViewRenderData, TElementLineViewRenderData } from '../../types/ElementViewType';
export declare abstract class Plane<T> {
    private _planeId;
    private _scene;
    constructor(sceneInstance: T, planeId: string);
    protected get scene(): T;
    get planeId(): string;
    abstract addLineItems(v: Map<string, TElementLineViewRenderData>): void;
    abstract updateLineItems(v: Map<string, TElementLineViewRenderData>): void;
    abstract deleteLineItems(v: Set<string>): void;
    abstract addCircleItems(v: Map<string, TElementCircleViewRenderData>): void;
    abstract updateCircleItems(v: Map<string, TElementCircleViewRenderData>): void;
    abstract deleteCircleItems(v: Set<string>): void;
    abstract addAssistLineItems(v: Map<string, TElementAssistLineViewRenderData>): void;
    abstract updateAssistLineItems(v: Map<string, TElementAssistLineViewRenderData>): void;
    abstract deleteAssistLineItems(v: Set<string>): void;
    abstract addAssistCircleItems(v: Map<string, TElementAssistCircleViewRenderData>): void;
    abstract updateAssistCircleItems(v: Map<string, TElementAssistCircleViewRenderData>): void;
    abstract deleteAssistCircleItems(v: Set<string>): void;
    abstract render(ctx: any): void;
}
