/* tslint:disable */
/* eslint-disable */
import { EmployeeOrder } from './employee-order';
export interface PaginatedEmployeeOrderList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<EmployeeOrder>;
}
