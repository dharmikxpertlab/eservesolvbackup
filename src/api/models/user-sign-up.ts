/* tslint:disable */
/* eslint-disable */
import { GenderEnum } from './gender-enum';
import { LanguageEnum } from './language-enum';

/**
 * Runs validation on the instance data to ensure validity of the
 * instance configuration.
 */
export interface UserSignUp {
  company_hint: string;
  email: string;
  first_name: string;
  gender: GenderEnum;
  is_employee_manager: boolean;
  is_location_manager: boolean;
  is_service_provider: boolean;
  language: LanguageEnum;
  last_name: string;
  password: string;
  phone: string;
}
