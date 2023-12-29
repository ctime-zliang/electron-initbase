import { Plane } from '../../common/Plane';
import { Line } from '../primitives/Line';
import { TElementAssistLineViewRenderData, TElementCircleViewRenderData, TElementLineViewRenderData } from '../../../types/ElementViewType';
import { AssistLine } from '../primitives/AssistLine';
import { SceneCanvas } from '../SceneCanvas';
import { Circle } from '../primitives/Circle';
export declare class PlaneCanvas<T extends SceneCanvas> extends Plane<T> {
    private _linesProfile;
    private _circlesProfile;
    private _assistLinesProfile;
    constructor(scene: T, planeId: string);
    protected get linesProfile(): Map<string, Line>;
    protected get circlesProfile(): Map<string, Circle>;
    protected get assistLinesProfile(): Map<string, AssistLine>;
    addLineItems(targetSet: Map<string, TElementLineViewRenderData>): void;
    updateLineItems(targetSet: Map<string, TElementLineViewRenderData>): void;
    deleteLineItems(targetIds: Set<string>): void;
    addCircleItems(targetSet: Map<string, TElementCircleViewRenderData>): void;
    updateCircleItems(targetSet: Map<string, TElementCircleViewRenderData>): void;
    deleteCircleItems(targetIds: Set<string>): void;
    addAssistLineItems(lines: Map<string, TElementAssistLineViewRenderData>): void;
    updateAssistLineItems(lines: Map<string, TElementAssistLineViewRenderData>): void;
    deleteAssistLineItems(lineIds: Set<string>): void;
    render(ctx: CanvasRenderingContext2D): void;
}
