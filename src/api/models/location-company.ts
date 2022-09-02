/* tslint:disable */
/* eslint-disable */
import { Company } from './company';
export interface LocationCompany {
  address: string;
  city: string;
  company: Company;
  id: number;
  name: string;
  remark?: null | string;
  zip_code: string;
}
