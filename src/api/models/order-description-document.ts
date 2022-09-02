/* tslint:disable */
/* eslint-disable */
import { OrderDescriptionDocumentTypeEnum } from './order-description-document-type-enum';
export interface OrderDescriptionDocument {
  created_at: string;
  document: string;
  id: number;
  name: string;
  type?: OrderDescriptionDocumentTypeEnum;
}
