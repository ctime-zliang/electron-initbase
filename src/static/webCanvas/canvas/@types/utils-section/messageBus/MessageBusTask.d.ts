import { BaseMessageBridge } from './BaseMessageBridge';
import { TMessageCallback } from './Types';
export declare class MessageBusTask {
    private readonly _callback;
    private _isRunning;
    constructor(callback: TMessageCallback);
    get isRunning(): boolean;
    execute(data: any, bridge?: BaseMessageBridge, source?: any): void;
}
