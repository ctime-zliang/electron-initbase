import { TElementAssistLineViewRenderData, TElementCircleViewRenderData, TElementLineViewRenderData } from '../../types/ElementViewType';
import { DrawLayerView } from './DrawLayerView';
export declare class DrawLayerViewPayloads {
    private _parent;
    private _linesProfileCreated;
    private _linesProfileUpdated;
    private _linesProfileDeleted;
    private _circlesProfileCreated;
    private _circlesProfileUpdated;
    private _circlesProfileDeleted;
    private _assistLinesProfileCreated;
    private _assistLinesProfileUpdated;
    private _assistLinesProfileDeleted;
    constructor(parent: DrawLayerView);
    get parent(): DrawLayerView;
    addLineProfileItem(data: TElementLineViewRenderData): string;
    updateLineProfileItem(id: string, data: TElementLineViewRenderData): void;
    deletedLineProfileItem(id: string): void;
    addCircleProfileItem(data: TElementCircleViewRenderData): string;
    updateCircleProfileItem(id: string, data: TElementCircleViewRenderData): void;
    deletedCircleProfileItem(id: string): void;
    addAssistLineProfileItem(data: TElementAssistLineViewRenderData): string;
    updateAssistLineProfileItem(id: string, data: TElementAssistLineViewRenderData): void;
    deletedAssistLineProfileItem(id: string): void;
    notify(): void;
}
