import { Matrix } from './Matrix';
import { Matrix3 } from './Matrix3';
import { Vector2 } from './Vector2';
import { Vector3 } from './Vector3';
export declare class Matrix4 extends Matrix {
    static ORIGIN: Matrix4;
    /**
     * 平移矩阵(坐标)
     */
    static createTranslateMatrix4ByCoordinate(x: number, y: number, z: number): Matrix4;
    /**
     * 旋转矩阵(弧度)
     */
    static createRotateXMatrix4ByRadian(radian: number): Matrix4;
    static createRotateYMatrix4ByRadian(radian: number): Matrix4;
    static createRotateZMatrix4ByRadian(radian: number): Matrix4;
    /**
     * 缩放矩阵(坐标)
     */
    static createScaleMatrix4ByCoordinate(x: number, y: number, z: number): Matrix4;
    /**
     * 翻转矩阵
     */
    static createFlipXMatrix4(): Matrix4;
    static createFlipYMatrix4(): Matrix4;
    static matrix4RotateZByRadianForPoint(radian: number, centerPoint: Vector2): Matrix4;
    static getMatrix4(startTranslate: Vector2, endTranslate: Vector2, radian: number, scaleX: number): Matrix4;
    constructor(data?: Array<number>);
    multiply4(matrix4: Matrix4): Matrix4;
    /**
     * 平移变换
     */
    translateByVector3(vector3: Vector3): Matrix4;
    /**
     * 绕轴旋转变换
     */
    rotateXByRadian(radian: number): Matrix4;
    rotateYByRadian(radian: number): Matrix4;
    rotateZByRadian(radian: number): Matrix4;
    /**
     * 缩放变换
     */
    scaleByVector3(vector3: Vector3): Matrix4;
    setOriginByVector3(vector3: Vector3): Matrix4;
    toMatrix3(): Matrix3;
    /**
     * 矩阵转置
     */
    transpose(): Matrix4;
    /**
     * 计算当前矩阵(满足条件时)的逆矩阵
     */
    getInverseMatrix(): Matrix4;
}
