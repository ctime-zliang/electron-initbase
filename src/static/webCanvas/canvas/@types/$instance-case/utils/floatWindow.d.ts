import { InputInfoData, StatisticsData } from '../../Main';
export declare function appendFloatContainerWindow(container: HTMLElement, position?: 'LT' | 'RT' | 'LB' | 'RB'): HTMLElement;
export declare const inforPanelControl: {
    appendTo(container: HTMLElement): void;
    update(data: InputInfoData): void;
};
export declare const performanceControl: {
    appendTo(container: HTMLElement): void;
    update(data: StatisticsData): void;
};
