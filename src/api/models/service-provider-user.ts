/* tslint:disable */
/* eslint-disable */
import { CredentialOptions } from './credential-options';
import { GenderEnum } from './gender-enum';
import { LanguageEnum } from './language-enum';
import { RolesEnum } from './roles-enum';
import { ServiceProviderProfile } from './service-provider-profile';

/**
 * Represents a Serivce Provider with User and Profile information along
 * with a list of all the available options for a few fields in the profile.
 */
export interface ServiceProviderUser {
  company: number;
  company_hint?: null | string;
  email: string;
  first_name?: string;
  gender?: GenderEnum;
  id: string;

  /**
   * Approve
   */
  is_approved?: boolean;
  is_employee_manager?: boolean;
  is_location_manager?: boolean;
  is_service_provider?: boolean;
  language?: LanguageEnum;
  last_name?: string;
  net_approval: boolean;
  options: CredentialOptions;
  password: string;
  phone: string;
  profile: ServiceProviderProfile;
  receive_employee_order_match_notification?: null | boolean;
  roles: Array<RolesEnum>;
  username: string;
}
