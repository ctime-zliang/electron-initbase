import { Matrix4 } from './Matrix4';
import { Vector } from './Vector';
export type TVector3JSONData = {
    x: number;
    y: number;
    z: number;
};
export declare class Vector3 extends Vector {
    static ORIGIN: Vector3;
    static X_INIT_UNIT_VERCTOR2: Vector3;
    static Y_INIT_UNIT_VERCTOR2: Vector3;
    static Z_INIT_UNIT_VERCTOR2: Vector3;
    private _x;
    private _y;
    private _z;
    constructor(x?: number, y?: number, z?: number);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get z(): number;
    set z(value: number);
    /**
     * 向量长度
     */
    get length(): number;
    /**
     * 向量副本
     */
    copy(): Vector3;
    /**
     * 向量与向量相加
     */
    add(vector3: Vector3): Vector3;
    /**
     * 向量与标量相加
     */
    addScalar(x: number, y: number, z: number): Vector3;
    /**
     * 向量与向量相减
     */
    sub(vector3: Vector3): Vector3;
    /**
     * 向量与标量相减
     */
    subScalar(x: number, y: number, z: number): Vector3;
    /**
     * 向量缩放
     */
    scale(x?: number, y?: number, z?: number): Vector3;
    /**
     * 向量与标量的乘积
     */
    mul(x?: number, y?: number, z?: number): Vector3;
    /**
     * 向量与向量叉乘
     */
    cross(vector3: Vector3): Vector3;
    /**
     * 向量与向量点乘
     */
    dot(vector3: Vector3): number;
    /**
     * 应用 matrix4
     */
    multiplyMatrix4(matrix4: Matrix4): Vector3;
    toString(): string;
    toJSON(): TVector3JSONData;
    /**
     * 向量的单位向量
     */
    normalize(): Vector3;
    distance(v: any): number;
}
