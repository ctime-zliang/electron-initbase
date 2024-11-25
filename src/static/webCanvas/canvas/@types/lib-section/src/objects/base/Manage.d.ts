export declare abstract class Manager<T> {
    private _items;
    constructor();
    get items(): Map<string, T>;
    set items(value: Map<string, T>);
    getAllItems(): Array<T>;
    getItemById(gId: string): T;
}
