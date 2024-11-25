export declare abstract class Vector {
    static hypot(deltaX: number, deltaY: number): number;
    static distance(x1: number, y1: number, x2: number, y2: number): number;
    constructor();
    abstract normalize(): any;
    abstract distance(v: any): number;
}
