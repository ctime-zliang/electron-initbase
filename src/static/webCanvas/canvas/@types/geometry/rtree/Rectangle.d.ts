import { TRtreeNodeItem, TSimpleRect } from './Types';
export declare class Rectangle {
    static overlapRectangle(rectA: TRtreeNodeItem | TSimpleRect, rectB: TRtreeNodeItem | TSimpleRect): boolean;
    static containsRectangle(rectA: TRtreeNodeItem | TSimpleRect, rectB: TRtreeNodeItem | TSimpleRect): boolean;
    static expandRectangle(expandRect: TRtreeNodeItem | TSimpleRect, referenceRect: TRtreeNodeItem | TSimpleRect): TRtreeNodeItem | TSimpleRect;
    static makeMBR(expandRect: TRtreeNodeItem | TSimpleRect, nodes: Array<TRtreeNodeItem | TSimpleRect>): TRtreeNodeItem | TSimpleRect;
    static squarifiedRatio(l: number, w: number, fill: number): number;
    private _sx;
    private _sy;
    private _w;
    private _h;
    private _ex;
    private _ey;
    private _p;
    constructor(sx: number, sy: number, w: number, h: number);
    get sx(): number;
    set sx(value: number);
    get sy(): number;
    set sy(value: number);
    get ex(): number;
    set ex(value: number);
    get ey(): number;
    set ey(value: number);
    get p(): boolean;
    set p(value: boolean);
    get w(): number;
    set w(value: number);
    get h(): number;
    set h(value: number);
    reset(sx: number, sy: number, w: number, h: number): void;
    overlap(rect: Rectangle): boolean;
    expand(rect: Rectangle): Rectangle;
}