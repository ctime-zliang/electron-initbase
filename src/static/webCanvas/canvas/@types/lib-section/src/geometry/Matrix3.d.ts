import { Matrix } from './Matrix';
import { Vector2 } from './Vector2';
export declare class Matrix3 extends Matrix {
    static ORIGIN: Matrix3;
    /**
     * 平移矩阵(坐标)
     */
    static createTranslateMatrix3ByCoordinate(x: number, y: number): Matrix3;
    /**
     * 旋转矩阵(弧度)
     */
    static createRotateZMatrix3ByRadian(radian: number): Matrix3;
    /**
     * 缩放矩阵(比例)
     */
    static createScaleMatrix3ByRatio(ratio: number): Matrix3;
    /**
     * 缩放矩阵(坐标)
     */
    static createScaleMatrix3ByCoordinate(x: number, y: number): Matrix3;
    private _iScale;
    private _jScale;
    constructor(data?: Array<number>);
    get iScale(): number;
    get jScale(): number;
    multiply3(matrix3: Matrix3): Matrix3;
    /**
     * 平移变换
     */
    translateByVector2(vector2: Vector2): Matrix3;
    /**
     * 绕轴旋转变换
     */
    rotateZByRadian(radian: number): Matrix3;
    /**
     * 缩放变换
     */
    scaleByRatio(ratio: number): Matrix3;
    scaleByVector2(vector2: Vector2): Matrix3;
    det(): number;
    isMirrored(): boolean;
    /**
     * 矩阵转置
     */
    transpose(): Matrix3;
    /**
     * 计算当前矩阵(满足条件时)的逆矩阵
     */
    getInverseMatrix(): Matrix3;
}
