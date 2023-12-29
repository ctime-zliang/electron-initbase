import { BBox2 } from './BBox2';
import { Vector2 } from './Vector2';
export declare abstract class LinearPrimitive {
    abstract start(): Vector2;
    abstract end(): Vector2;
    abstract bbox2(): BBox2;
}
