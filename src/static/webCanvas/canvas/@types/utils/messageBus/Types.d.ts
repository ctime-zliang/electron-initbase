import { BaseMessageBridge } from './BaseMessageBridge';
import { EMessageType } from './Config';
export type TMessageItem = {
    topic: string;
    type: EMessageType;
    data: any;
};
export type TMessageCallback = (data: any, bridge?: BaseMessageBridge, source?: any) => void;
export type TRemoteMessage = {
    data: any;
    bridge?: BaseMessageBridge;
    source?: any;
};
export type TMessageBusRPCData = {
    data: any;
    reply: string;
};
