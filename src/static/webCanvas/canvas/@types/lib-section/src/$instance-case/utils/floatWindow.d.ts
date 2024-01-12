import { CanvasProfileChangedData, InputInfoData, ResouceChangedData, SystemConfigProfile } from '../../Main';
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
    update(data: ResouceChangedData): void;
};
export declare const profileControl: {
    containerDomId: string;
    appendTo(container: HTMLElement): void;
    bindEvent(callback: (action: string, key?: string, value?: any) => void): void;
    update(data: SystemConfigProfile): void;
};
