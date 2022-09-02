/* tslint:disable */
/* eslint-disable */
import { FcmDevice } from './fcm-device';
export interface PaginatedFcmDeviceList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<FcmDevice>;
}
