/* tslint:disable */
/* eslint-disable */

/**
 * Don't require email to be unique so visitor can signup multiple times,
 * if misplace verification email.  Handle in view.
 */
export interface Signup {
  email: string;
  first_name?: string;
  last_name?: string;
  password: string;
}
