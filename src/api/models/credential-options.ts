/* tslint:disable */
/* eslint-disable */
import { Certificate } from './certificate';
import { Experience } from './experience';
import { Skill } from './skill';
import { Training } from './training';

/**
 * Serializes all the available options for the credentials of
 * a service provider.
 */
export interface CredentialOptions {
  certificates: Array<Certificate>;
  experience: Array<Experience>;
  skills: Array<Skill>;
  training: Array<Training>;
}
