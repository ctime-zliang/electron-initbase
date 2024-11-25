import { BaseMessageBridge } from './BaseMessageBridge';
import { MessageBus } from './MessageBus';
export declare class WindowMessageBridge extends BaseMessageBridge {
    constructor(bus: MessageBus);
    private postMessage;
    publish(topic: string, message: any, target: Window): void;
    subscribe(topic: string, target: any): void;
    push(topic: string, message: any, target: Window): void;
    pull(topic: string, target: Window): void;
}
