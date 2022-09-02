/* tslint:disable */
/* eslint-disable */
import { GenderEnum } from './gender-enum';
import { LanguageEnum } from './language-enum';
import { RolesEnum } from './roles-enum';

/**
 * Runs validation on the instance data to ensure validity of the
 * instance configuration.
 */
export interface PatchedUser {
  company?: number;
  company_hint?: null | string;
  email?: string;
  first_name?: string;
  gender?: GenderEnum;
  id?: string;

  /**
   * Approve
   */
  is_approved?: boolean;
  is_employee_manager?: boolean;
  is_location_manager?: boolean;
  is_service_provider?: boolean;
  language?: LanguageEnum;
  last_name?: string;
  net_approval?: boolean;
  password?: string;
  phone?: string;
  receive_employee_order_match_notification?: null | boolean;
  roles?: Array<RolesEnum>;
  username?: string;
}
