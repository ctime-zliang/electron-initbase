import { Vector2 } from './Vector2';
export declare class BBox2 {
    static isValid(bbox2: BBox2): boolean;
    private readonly _data;
    private _minX;
    private _minY;
    private _maxX;
    private _maxY;
    constructor(minX: number, minY: number, maxX: number, maxY: number);
    get minX(): number;
    set minX(value: number);
    get minY(): number;
    set minY(value: number);
    get maxX(): number;
    set maxX(value: number);
    get maxY(): number;
    set maxY(value: number);
    get width(): number;
    get height(): number;
    get UpperLeftPoint(): Vector2;
    get UpperRightPoint(): Vector2;
    get LowerLeftPoint(): Vector2;
    get LowerRightPoint(): Vector2;
    get CenterPoint(): Vector2;
    get data(): Float64Array;
    /**
     * 判断当前 BBox2 实例是否包裹了传入的 vector2
     */
    isContainsPoint(vector2: Vector2): boolean;
    /**
     * 判断当前 BBox2 实例是否包裹了传入的 bbox2
     */
    isConatinsBBox2(bbox2: BBox2): boolean;
    /**
     * 判断传入的 bbox2 是否包裹了当前 BBox2 实例
     */
    isBeWrappedByBBox2(bbox2: BBox2): boolean;
    /**
     * 判断当前 BBox2 实例与传入的 bbox2 边界范围是否相等
     */
    equals(bbox2: BBox2): boolean;
    /**
     * 判断当前 BBox2 实例与传入的 bbox2 边界范围是否交叉
     */
    isIntersect(bbox2: BBox2): boolean;
    reset(): void;
    toString(): string;
    isContainsX(x: number): boolean;
    isContainsY(y: number): boolean;
}
