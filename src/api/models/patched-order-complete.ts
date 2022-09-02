/* tslint:disable */
/* eslint-disable */
import { StatusEnum } from './status-enum';
export interface PatchedOrderComplete {
  order_pin?: string;
  signature?: string;
  status?: StatusEnum;
}
