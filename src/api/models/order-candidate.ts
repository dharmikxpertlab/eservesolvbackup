/* tslint:disable */
/* eslint-disable */
import { GenderEnum } from './gender-enum';
import { ServiceProviderProfile } from './service-provider-profile';
export interface OrderCandidate {
  company: number;
  distance: null | number;
  first_name?: string;
  gender?: GenderEnum;
  id: string;
  last_name?: string;
  profile: ServiceProviderProfile;
  username: string;
}
