export declare class Context {
    private _status;
    constructor(status: number);
    get status(): number;
    set status(status: number);
    isStatusMatch(bitIndex: number): boolean;
    setStatusMatch(bitIndex: number, status: boolean): number;
}
