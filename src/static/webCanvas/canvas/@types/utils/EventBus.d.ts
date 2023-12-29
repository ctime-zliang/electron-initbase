export type TRPCResult = {
    error: any;
    data: any;
    __arguments: any;
};
export declare class EventBus {
    private handlers;
    constructor();
    on(eventName: string, callback: Function, spaceName?: string): void;
    emit(eventName: string, params?: any, spaceName?: string): Promise<void>;
    subscribe(eventName: string, callback: Function, spaceName?: string): void;
    exec(eventName: string, params: any, spaceName?: string): Promise<TRPCResult>;
    clearEvent(eventName: string, spaceName?: string): void;
    clearNameSpace(spaceName?: string): void;
}
