import { MessageBus } from '../../../utils-section/messageBus/MessageBus';
import { WindowMessageBridge } from '../../../utils-section/messageBus/WindowMessageBridge';
export declare class MessageTool {
    private readonly _messageBus;
    private readonly _windowMessageBridge;
    constructor();
    get messageBus(): MessageBus;
    get windowMessageBridge(): WindowMessageBridge;
}
