export declare class SystemConfig {
    private static thisInstance;
    static getInstance(): SystemConfig;
    private _isDarkTheme;
    private _alignGrid;
    private _enableGrid;
    private _enableAxis;
    private _enableFPSCount;
    constructor();
    set isDarkTheme(value: boolean);
    get isDarkTheme(): boolean;
    set alignGrid(value: boolean);
    get alignGrid(): boolean;
    set enableGrid(value: boolean);
    get enableGrid(): boolean;
    set enableAxis(value: boolean);
    get enableAxis(): boolean;
    set enableFPSCount(value: boolean);
    get enableFPSCount(): boolean;
}
