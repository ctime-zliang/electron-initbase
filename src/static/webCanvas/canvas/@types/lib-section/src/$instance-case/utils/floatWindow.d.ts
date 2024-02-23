import { CanvasProfileChangedData, InputInfoData, ResouceProfileChangedData, SystemConfigProfileChangedData } from '../../Main';
export declare function appendFloatContainerWindow(container: HTMLElement, position?: 'LT' | 'RT' | 'LB' | 'RB'): HTMLElement;
export declare const iputsPanelControl: {
    appendTo(container: HTMLElement): void;
    update(data: InputInfoData): void;
};
export declare const canvasPanelControl: {
    appendTo(container: HTMLElement): void;
    update(data: CanvasProfileChangedData): void;
};
export declare const resourceControl: {
    appendTo(container: HTMLElement): void;
    update(data: ResouceProfileChangedData): void;
};
export declare const profileControl: {
    containerDomId: string;
    appendTo(container: HTMLElement): void;
    bindEvent(callback: (action: string, key?: string, value?: any) => void): void;
    update(data: SystemConfigProfileChangedData): void;
};
