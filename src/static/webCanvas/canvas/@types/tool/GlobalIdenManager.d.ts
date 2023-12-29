export declare class GlobalIdenManager {
    private _elementIden;
    private _elementPrefix;
    private _componentIden;
    private _componentPrefix;
    constructor();
    getElementIden(): string;
    getComponentIden(): string;
    getHashIden(length?: number): string;
}
