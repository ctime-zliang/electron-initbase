export declare class FPSCount {
    private _timeAnchor;
    private _countByInterval;
    private _consumByInterval;
    private _interval;
    private _overInterval;
    private _fps;
    constructor();
    get overInterval(): boolean;
    get fps(): number;
    calcFps(): void;
}
