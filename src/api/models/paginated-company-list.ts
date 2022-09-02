/* tslint:disable */
/* eslint-disable */
import { Company } from './company';
export interface PaginatedCompanyList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<Company>;
}
