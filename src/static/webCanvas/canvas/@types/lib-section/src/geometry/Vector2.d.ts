import { BBox2 } from './BBox2';
import { Matrix3 } from './Matrix3';
import { Matrix4 } from './Matrix4';
import { Vector } from './Vector';
export type TVector2JSONData = {
    x: number;
    y: number;
};
export declare class Vector2 extends Vector {
    static ORIGIN: Vector2;
    static X_INIT_UNIT_VERCTOR2: Vector2;
    static Y_INIT_UNIT_VERCTOR2: Vector2;
    /**
     * 计算某个初始弧度在经过特定矩阵变换后的弧度
     */
    static caculateAngle(radian: number, matrix4: Matrix4): number;
    /**
     * 计算某个弧度的单位向量
     */
    static getInitVector2ByRadian(radian: number): Vector2;
    private _x;
    private _y;
    constructor(x?: number, y?: number);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    /**
     * 向量长度
     */
    get length(): number;
    /**
     * 向量弧度方向
     */
    get dir(): number;
    /**
     * 向量角度方向
     */
    get dirDeg(): number;
    /**
     * 向量副本
     */
    copy(): Vector2;
    /**
     * 向量与向量相加
     */
    add(vector2: Vector2): Vector2;
    /**
     * 向量与标量相加
     */
    addScalar(x: number, y: number): Vector2;
    /**
     * 向量与向量相减
     */
    sub(vector2: Vector2): Vector2;
    /**
     * 向量与标量相减
     */
    subScalar(x: number, y: number): Vector2;
    /**
     * 向量缩放
     */
    scale(x?: number, y?: number): Vector2;
    /**
     * 向量与标量的乘积
     */
    mul(x?: number, y?: number): Vector2;
    /**
     * 向量与向量叉乘
     */
    cross(vector2: Vector2): number;
    /**
     * 向量与向量点乘
     */
    dot(vector2: Vector2): number;
    /**
     * 向量 sin 值
     */
    getSin(): number;
    /**
     * 向量 cos 值
     */
    getCos(): number;
    /**
     * 该向量的终点的 bbox2
     */
    getEndDotBbbox2(): BBox2;
    /**
     * 设当前向量为 B, 输入向量 A, 计算 AB 向量的弧度
     */
    agnleOfTowVector(vector2: Vector2): number;
    /**
     * 设当前向量为 B, 输入向量 A, 计算 AB 向量与 X 轴正向的弧度
     */
    agnleXOfTowVector(vector2: Vector2): number;
    /**
     * 向量旋转 - 绕起点旋转 radian(弧度) 后的结果向量
     * 		将向量 v0(x0, y0) 旋转 θ 角度后
     * 			x = x0 * cos(θ) - y0 * sin(θ)
     * 			y = x0 * sin(θ) + x0 * cos(θ)
     */
    rotate(radian: number): Vector2;
    /**
     * 向量旋转 - 绕向量外定点旋转 radian(弧度) 后的结果向量
     */
    rotateSurround(center2: Vector2, radian: number): Vector2;
    /**
     * 向量关于 origin2 坐标点的中心对称向量
     */
    mirrorSurround(origin2?: Vector2): Vector2;
    /**
     * 向量关于 origin2 坐标点的 x 坐标值的 X 轴镜像
     */
    mirrorSurroundX(origin2?: Vector2): Vector2;
    /**
     * 向量关于 origin2 坐标点的 y 坐标值的 Y 轴镜像
     */
    mirrorSurroundY(origin2?: Vector2): Vector2;
    /**
     * 应用 matrix3
     */
    multiplyMatrix3(matrix3: Matrix3): Vector2;
    /**
     * 应用 matrix4
     */
    multiplyMatrix4(matrix4: Matrix4): Vector2;
    toString(): string;
    toJSON(): TVector2JSONData;
    /**
     * 向量的单位向量
     */
    normalize(): Vector2;
    /**
     * 判断当前向量与输入向量是否相等
     */
    equalsWithVector2(vector2: Vector2, place?: number): boolean;
    /**
     * 判断当前坐标点与输入坐标点是否相等
     */
    equalsWithPoint(p: Vector2): boolean;
    /**
     * 计算当前点与输入点 P(vector2) 的距离
     * 		向量与向量 vector2 的距离
     */
    distance(vector2: Vector2): number;
}
