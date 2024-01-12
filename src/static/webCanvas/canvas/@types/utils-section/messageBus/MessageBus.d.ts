import { BaseMessageBridge } from './BaseMessageBridge';
import { MessageBusTask } from './MessageBusTask';
import { TMessageCallback, TRemoteMessage } from './Types';
export declare class MessageBus {
    private readonly _subscribedTasks;
    private readonly _pulledTasks;
    private readonly _pushedMessages;
    private _rpcTicket;
    constructor();
    private rpcReply;
    uniqueRpcTopic(topic: string): string;
    publish(topic: string, data: any, bridge?: BaseMessageBridge, source?: any): void;
    subscribe(topic: string, callback: TMessageCallback): MessageBusTask;
    push(topic: string, data: any, bridge?: BaseMessageBridge, source?: any): void;
    pull(topic: string, callback: TMessageCallback): MessageBusTask;
    registeAsyncService(topic: string, callback: (...args: Array<any>) => any | Promise<any>): void;
    asyncRequest(topic: string, data?: any): Promise<TRemoteMessage>;
}
