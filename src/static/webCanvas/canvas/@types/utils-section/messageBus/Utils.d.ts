export declare function remove<T>(list: Array<T>, item: T): Array<T>;
export declare function deepClone<T>(data: T): T;
export declare function getOrInit<T>(obj: {
    [key: string]: T;
}, key: string | number, initializer?: (key: string | number) => T): T;
export declare function getOrInitArr<T>(obj: {
    [key: string]: Array<T>;
}, key: string | number): Array<T>;
