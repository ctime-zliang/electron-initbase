import { EDrawLayerStatus } from '../config/DrawLayerConfig';
export type TDrawLayerViewRenderData = {
    status: EDrawLayerStatus;
    layerItemId: string;
    layerItemName: string;
    layerItemOpacity: number;
    groupId: string;
};
