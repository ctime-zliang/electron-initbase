export declare class Matrix {
    /**
     * 矩阵乘法运算
     * 		当矩阵 A 的列数 (colLen) 于矩阵 B 的行数 (rowLen) 时相同时, A 与 B 可以相乘
     *          [A列等于B行可相乘]
     * 		矩阵 C 的行数等于矩阵 A 的行数, C 的列数等于 B 的列数
     * 		A =
     * 			1  2  3
     *    		4  5  6
     * 		B =
     * 			8  5
     * 			4  2
     * 			2  6
     * 		相乘得
     * 		C = A*B =
     * 			1 * 8 + 2 * 4 + 3 * 2 = 22    1 * 5 + 2 * 2 + 3 * 6 = 27
     * 			4 * 8 + 5 * 4 + 6 * 2 = 64    4 * 5 + 5 * 2 + 6 * 6 = 66
     */
    /**
     * 计算矩阵 A 与矩阵 B 的乘积
     * 		mA - 矩阵 A 的行数
     * 		nA - 矩阵 A 的列数
     * 		mB - 矩阵 B 的行数
     * 		nB - 矩阵 B 的列数
     */
    static matrixMul(mA: number, nA: number, mB: number, nB: number, A: Array<number>, B: Array<number>): Array<number>;
    /**
     * 依据某个数值在矩阵中的"坐标"参数, 获取其在数组中的真实索引
     *      例如
     *          A =
     * 			    1  2  3
     *    		    4  5  6
     *      需要获取矩阵 A 中第 2 行第 2 列的项(item = 5)在数组中的索引
     *      即 index = Matrix.matrixAt(3, 1, 1)
     */
    static matrixAt(colLen: number, rowIndex: number, columnIndex: number): number;
    static getMatrixRank(matrixArr: Array<number>, rowLen: number, colLen: number): {
        rank: number;
        updatedMatrixArr: Array<number>;
    };
    private _m;
    private _n;
    private _data;
    constructor(m: number, n: number, data: Array<number>);
    get m(): number;
    get n(): number;
    get data(): Array<number>;
    /**
     * 将当前矩阵与矩阵 B 相乘
     */
    multiply(B: Matrix): Matrix;
    /**
     * 计算当前矩阵的秩
     */
    getMatrixRank(): number;
    /**
     * 计算当前矩阵(满足条件时)的逆矩阵
     */
    getInverseMatrix(): Matrix;
    hashCode(): number;
    /**
     * 以平铺模式生成矩阵字符串值
     */
    toString(): string;
    /**
     * 以格式化模式生成矩阵字符串值
     */
    toStringFormat(): string;
    /**
     * 矩阵转置
     */
    transpose(): Matrix;
    protected initExpandMatrix(matrixArr: Array<number>): Array<number>;
    protected inverseMatrix(expandMatrixArr: Array<number>, rowLen: number, colLen: number): Array<number>;
}
