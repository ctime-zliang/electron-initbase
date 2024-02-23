export declare abstract class Command {
    private _groupId;
    constructor(groupId: string);
    get groupId(): string;
    set groupId(value: string);
    abstract undo(): void;
    abstract redo(): void;
    protected abstract modify(...args: Array<any>): void;
    protected abstract rebuild(...args: Array<any>): void;
    protected abstract delete(...args: Array<any>): void;
}
