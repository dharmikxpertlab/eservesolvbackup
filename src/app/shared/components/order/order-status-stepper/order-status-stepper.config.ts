import { StatusEnum as OrderState } from 'src/api/models';
import { Label } from 'src/app/shared/label';

export interface OrderStateStep {
    label?: string;
    text?: string;
    nextButtonText?: string;
    orderState: OrderState;
    checked?: boolean;
    expanded?: boolean;
    formField: string;
}

export const ServiceProviderOrderSteps: OrderStateStep[] = [
    {
        orderState: OrderState.Accepted,
        label: 'Accept Order',
        formField: 'accepted_at',
    },
    {
        orderState: OrderState.OnTheWay,
        label: 'On the way',
        formField: 'on_the_way_at'
    },
    {
        orderState: OrderState.WorkStarted,
        label: 'Work Started',
        formField: 'work_started_at'
    },
    {
        orderState: OrderState.WorkComplete,
        label: 'Work Complete',
        formField: 'work_completed_at'
    },
    {
        orderState: OrderState.Complete,
        label: 'Take Signature',
        formField: 'completed_at',
        text: 'Have the client confirm the completion of your work with a signature.'
    }
];

export const CustomerOrderSteps: OrderStateStep[] = [
    {
        orderState: OrderState.Accepted,
        label: 'Order Accepted',
        formField: 'accepted_at'
    },
    {
        orderState: OrderState.OnTheWay,
        label: 'Technician on the way',
        formField: 'on_the_way_at'
    },
    {
        orderState: OrderState.WorkStarted,
        label: 'Work Started',
        formField: 'work_started_at'
    },
    {
        orderState: OrderState.WorkComplete,
        label: 'Work Complete',
        formField: 'work_completed_at'
    },
    {
        orderState: OrderState.Complete,
        label: 'Order Completed',
        formField: 'completed_at'
    }
];


export const CUSTOMER_ORDER_STATUS_LABELS: Label[] = [
    {
        key: OrderState.Draft,
        value: 'Draft'
    },
    {
        key: OrderState.Finalized,
        value: 'In Queue',
    },
    {
        key: OrderState.Accepted,
        value: 'Order Accepted',
    },
    {
        key: OrderState.OnTheWay,
        value: 'On the way',
    },
    {
        key: OrderState.WorkStarted,
        value: 'Work Started',
    },
    {
        key: OrderState.WorkComplete,
        value: 'Work Complete',
    },
    {
        key: OrderState.Complete,
        value: 'Order Completed',
    }
];
