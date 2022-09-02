import { EmployeeOrder, OrderCandidate } from 'src/api/models';

export interface EmployeeOrderManager extends EmployeeOrder {
    candidate?: OrderCandidate;
}
