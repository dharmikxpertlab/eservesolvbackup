/* tslint:disable */
/* eslint-disable */
import { OrderDescriptionDocument } from './order-description-document';
export interface PaginatedOrderDescriptionDocumentList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<OrderDescriptionDocument>;
}
