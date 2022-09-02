import { Type2DeEnum } from 'src/api/models';
import { Label } from './label';

export const ORDER_TYPE_LABEL: Label[] = [
    {
        key: Type2DeEnum.EmergencyRepair,
        value: 'Emergency'
    },
    {
        key: Type2DeEnum.NewProject,
        value: 'New Project'
    },
    {
        key: Type2DeEnum.PredictiveMaintenance,
        value: 'Maintenance'
    }
];
