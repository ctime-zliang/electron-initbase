import { InputInfoData, StatisticsData, SystemConfigProfile } from '../../Main';
export declare function appendFloatContainerWindow(container: HTMLElement, position?: 'LT' | 'RT' | 'LB' | 'RB'): HTMLElement;
export declare const inforPanelControl: {
    appendTo(container: HTMLElement): void;
    update(data: InputInfoData): void;
};
export declare const performanceControl: {
    appendTo(container: HTMLElement): void;
    update(data: StatisticsData): void;
};
export declare const profileControl: {
    containerDomId: string;
    appendTo(container: HTMLElement): void;
    bindEvent(callback: (action: string, key?: string, value?: any) => void): void;
    update(data: SystemConfigProfile): void;
};
