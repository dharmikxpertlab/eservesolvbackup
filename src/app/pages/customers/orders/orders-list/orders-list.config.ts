import { StatusEnum as OrderState } from 'src/api/models';

export interface OrderListSection {
    name: string;
    order_states: OrderState[];
}

export enum OrderListSectionHeading {
    Draft = 'Draft Orders',
    Requested = 'Requested',
    Pending = 'Pending',
    Completed = 'Completed'
}

export const OrderListSections: OrderListSection[] = [
    {
        name: OrderListSectionHeading.Draft,
        order_states: [OrderState.Draft]
    },
    {
        name: OrderListSectionHeading.Requested,
        order_states: [OrderState.Finalized]
    },
    {
        name: OrderListSectionHeading.Pending,
        order_states: [
            OrderState.Accepted,
            OrderState.OnTheWay,
            OrderState.WorkStarted,
            OrderState.WorkComplete
        ]
    },
    {
        name: OrderListSectionHeading.Completed,
        order_states: [OrderState.Complete]
    }
];
