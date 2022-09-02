/* tslint:disable */
/* eslint-disable */
import { FcmDeviceTypeEnum } from './fcm-device-type-enum';
export interface PatchedFcmDevice {

  /**
   * Inactive devices will not be sent notifications
   */
  active?: boolean;
  date_created?: string;

  /**
   * Unique device identifier
   */
  device_id?: null | string;
  id?: number;
  name?: null | string;
  registration_id?: string;
  type?: FcmDeviceTypeEnum;
}
