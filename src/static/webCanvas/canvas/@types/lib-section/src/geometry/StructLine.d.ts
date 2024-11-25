import { BBox2 } from './BBox2';
import { LinearPrimitive } from './LinearPrimitive';
import { Vector2 } from './Vector2';
export declare class StructLine extends LinearPrimitive {
    private _startPoint;
    private _endPoint;
    constructor(startPoint: Vector2, endPoint: Vector2);
    get startPoint(): Vector2;
    set startPoint(value: Vector2);
    get endPoint(): Vector2;
    set endPoint(value: Vector2);
    start(): Vector2;
    end(): Vector2;
    bbox2(): BBox2;
    toString(): string;
}
