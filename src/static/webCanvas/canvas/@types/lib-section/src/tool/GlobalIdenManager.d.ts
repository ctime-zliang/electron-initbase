export declare class GlobalIdenManager {
    private _usedElementIdenCounts;
    private _elementIden;
    private _elementPrefix;
    private _componentIden;
    private _componentPrefix;
    constructor();
    get usedElementIdenCounts(): Array<number>;
    set usedElementIdenCounts(value: Array<number>);
    private genElementIdenCount;
    getElementIden(): string;
    getComponentIden(): string;
    getHashIden(length?: number): string;
    updateUsedElementIdenCounts(fullElementItemId: string): void;
    reset(): void;
}
