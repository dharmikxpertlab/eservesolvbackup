import { CategoryEnum, Certificate, Experience, Skill, Training } from 'src/api/models';
import { OrderAreas } from 'src/app/pages/customers/orders/order-creation/order-creation.config';

export enum ServiceProviderOptions {
    Skills = 'skills',
    Certificate = 'certificates',
    Experience = 'experience',
    Training = 'training'
}

export interface ServiceProviderProfileOption {
    name: string;
    type: ServiceProviderOptions;
}

export const OptionsList: ServiceProviderProfileOption[] = [
    {
        name: 'Selection Criteria / Skills',
        type: ServiceProviderOptions.Skills,
    },
    {
        name: 'Certificates',
        type: ServiceProviderOptions.Training
    },
    {
        name: 'Preventive Occupational Health Care',
        type: ServiceProviderOptions.Certificate,
    },
    {
        name: 'Experience with Manufacturers',
        type: ServiceProviderOptions.Experience
    }
];

export const CategoryDetails = [
    {
        name: 'General',
        value: CategoryEnum.General,
    },
    ...OrderAreas,
];

export interface SkillCheckbox extends Skill {
    isChecked: boolean;
}

export interface ExperienceCheckbox extends Experience {
    isChecked: boolean;
}

export interface CertificateCheckbox extends Certificate {
    isChecked: boolean;
}

export interface TrainingCheckbox extends Certificate {
    isChecked: boolean;
}
