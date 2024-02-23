import { EBaseFileType, EElementFileType } from '../config/ElementProfile';
import { AssistLineShape } from '../objects/assist/AssistLineShape';
import { AssistPointShape } from '../objects/assist/AssistPointShape';
import { CircleShape } from '../objects/shapes/items/CircleShape';
import { LineShape } from '../objects/shapes/items/LineShape';
export type TElementShapeType = LineShape | CircleShape;
export type TAllElementShapeType = LineShape | AssistLineShape | CircleShape | AssistPointShape;
export type TFileType = EBaseFileType & EElementFileType;
export type TFillElementShapeType = CircleShape;
