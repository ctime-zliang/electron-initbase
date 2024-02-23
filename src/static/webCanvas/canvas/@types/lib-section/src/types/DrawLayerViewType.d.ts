import { EDrawLayerStatus } from '../config/DrawLayerProfile';
export type TDrawLayerJSONData = {
    status: EDrawLayerStatus;
    layerItemId: string;
    layerItemName: string;
    layerItemOpacity: number;
    groupId: string;
};
