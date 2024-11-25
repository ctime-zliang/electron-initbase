import { MessageBus } from './MessageBus';
import { TMessageItem, TRemoteMessage } from './Types';
export declare abstract class BaseMessageBridge {
    private readonly _bus;
    constructor(bus: MessageBus);
    protected processRemoteMessage(messageItem: TMessageItem, source: any): void;
    asyncRequest(topic: string, data: any, target: any): Promise<TRemoteMessage>;
    abstract publish(topic: string, message: any, target: any): void;
    abstract subscribe(topic: string, target: any): void;
    abstract push(topic: string, message: any, target: any): void;
    abstract pull(topic: string, target: any): void;
}
