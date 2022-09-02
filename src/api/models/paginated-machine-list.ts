/* tslint:disable */
/* eslint-disable */
import { Machine } from './machine';
export interface PaginatedMachineList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<Machine>;
}
