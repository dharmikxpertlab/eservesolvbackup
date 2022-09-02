import { StatusEnum as OrderState } from 'src/api/models';
import { OrderListSection } from 'src/app/pages/customers/orders/orders-list/orders-list.config';

export enum OrderListSectionHeading {
    Requests = 'Requests',
    Active = 'Active',
    Completed = 'Completed'
}

export const OrderListSections: OrderListSection[] = [
    {
        name: 'Requests',
        order_states: [
            OrderState.Finalized,
        ],
    },
    {
        name: 'Active',
        order_states: [
            OrderState.Accepted,
            OrderState.OnTheWay,
            OrderState.WorkStarted,
            OrderState.WorkComplete
        ]
    },
    {
        name: 'Completed',
        order_states: [
            OrderState.Complete
        ],
    }
];
