import * as _ from 'lodash';
import { OrderListSectionHeading, OrderListSections } from '../orders/orders-list/orders-list.config';

export const OrderStatusSections = {
    Draft: _.find(OrderListSections, {
        name: OrderListSectionHeading.Draft
    }).order_states,
    Requested: _.find(OrderListSections, {
        name: OrderListSectionHeading.Requested
    }).order_states,
    Pending: _.find(OrderListSections, {
        name: OrderListSectionHeading.Pending
    }).order_states,
    Completed: _.find(OrderListSections, {
        name: OrderListSectionHeading.Completed
    }).order_states
};
