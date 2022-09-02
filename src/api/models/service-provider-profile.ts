/* tslint:disable */
/* eslint-disable */
import { Location } from './location';
export interface ServiceProviderProfile {
  available?: boolean;
  certificates?: Array<number>;
  description?: null | string;
  experience?: Array<number>;
  id: number;
  location: number;
  location_description: Location;
  profile_picture?: null | string;
  profile_picture_thumbnails: string;
  rate_emergency: string;
  rate_standard: string;
  skills?: Array<number>;
  training?: Array<number>;
}
