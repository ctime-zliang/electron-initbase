import { GlobalIdenManager } from './tool/GlobalIdenManager';
import { EventBus } from './utils/EventBus';
import { ElementController } from './controller/ElementController';
import { DrawLayerController } from './controller/DrawLayerController';
import { ModifyController } from './presenter/ModifyController';
import { Environment } from './controller/Environment';
import { RTree } from './geometry/rtree/Rtree';
import { DropDragTool } from './tool/common/DropDragTool';
import { SelectManager } from './controller/SelectManage';
import { FilterManager } from './controller/FilterManager';
import { HandlerControl } from './tool/selection/HandlerControl';
import { Service } from './service/Service';
import { Adsorption } from './tool/Adsorption';
export declare const globalIdenManager: GlobalIdenManager;
export declare const eventBus: EventBus;
export declare const elementController: ElementController;
export declare const drawLayerController: DrawLayerController;
export declare const filterManager: FilterManager;
export declare const selectManager: SelectManager;
export declare const modifyController: ModifyController;
export declare const environment: Environment;
export declare const service: Service;
export declare const handlerControl: HandlerControl;
export declare const rtree: RTree;
export declare const adsorption: Adsorption;
export declare const dropDragTool: DropDragTool;