export type TRtreeNodeLeafDataItem = {
    sx: number;
    sy: number;
    w: number;
    h: number;
    data?: any;
};
export type TRtreeNodeItem = {
    sx: number;
    sy: number;
    w: number;
    h: number;
    nodes: Array<TRtreeNodeItem>;
    leaf?: any;
    id?: string;
};
export type TSimpleRect = {
    sx: number;
    sy: number;
    w: number;
    h: number;
};
export type TFullRect = {
    sx: number;
    sy: number;
    ex: number;
    ey: number;
    w: number;
    h: number;
};
