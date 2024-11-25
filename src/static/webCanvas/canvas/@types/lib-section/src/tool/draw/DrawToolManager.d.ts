import { FrameTool } from '../FrameTool';
export declare class DrawToolManager {
    private _frameToolHandler;
    constructor(frameToolHandler: FrameTool);
    get frameToolHandler(): FrameTool;
    set frameToolHandler(value: FrameTool);
    update(data: any): void;
}
