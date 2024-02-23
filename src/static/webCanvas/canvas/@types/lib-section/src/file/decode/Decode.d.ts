export declare abstract class Decode {
    abstract parseLineData(...args: Array<any>): void;
    abstract finish(...args: Array<any>): void;
    protected abstract check(...args: Array<any>): boolean;
}
