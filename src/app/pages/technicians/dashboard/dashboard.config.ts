import { StatusEnum as OrderState } from 'src/api/models';
import { OrderListSections } from '../../technicians/orders/orders-list/orders-list.config';
import * as _ from 'lodash';

export const OrderStatusSections = {
    Requests: _.find(OrderListSections, {
        name: 'Requests'
    }).order_states,
    Active: _.find(OrderListSections, {
        name: 'Active'
    }).order_states,
    Completed: _.find(OrderListSections, {
        name: 'Completed'
    }).order_states
};
