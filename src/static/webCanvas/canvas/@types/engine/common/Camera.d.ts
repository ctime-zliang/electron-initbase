import { Matrix4 } from '../../geometry/Matrix4';
import { Vector3 } from '../../geometry/Vector3';
export declare class Camera {
    private static thisInstance;
    static getInstance(): Camera;
    private _width;
    private _height;
    private _isNeedUpdate;
    private _matrix4;
    private _renderMatrix4;
    private _projection;
    private _pxRatio;
    private _origin;
    constructor(width?: number, height?: number);
    set width(value: number);
    get width(): number;
    set height(value: number);
    get height(): number;
    set isNeedUpdate(value: boolean);
    get isNeedUpdate(): boolean;
    set matrix4(value: Matrix4);
    get matrix4(): Matrix4;
    set renderMatrix4(value: Matrix4);
    get renderMatrix4(): Matrix4;
    set projection(value: Matrix4);
    get projection(): Matrix4;
    set pxRatio(value: number);
    get pxRatio(): number;
    set origin(value: Vector3);
    get origin(): Vector3;
    refreshByVector3(vector3: Vector3): void;
    getRenderMatrix(): Matrix4;
    getPxRatio(): number;
    getProjection(): Matrix4;
    getSourceMatrix(): Matrix4;
    getZoomRatio(): number;
    getViewRenderMatrixData(): Array<ReadonlyArray<number>>;
    private updateViewMatrix;
}