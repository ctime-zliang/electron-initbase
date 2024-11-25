import { Tool } from './Tool';
export declare abstract class ToolChain<T> {
    private _nextTool;
    constructor();
    get nextTool(): Tool<T> | null;
    set nextTool(value: Tool<T> | null);
    handler(process: (tool: Tool<T>) => void): void;
}
