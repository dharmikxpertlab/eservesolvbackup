import { RolesEnum } from 'src/api/models/roles-enum';

export const appPages = [
    {
        title: 'Login',
        url: '/auth/login',
        icon: 'log-in',
        menuIndex: 1,
        shownBeforeLogin: true,
        shownAfterLogin: false,
        requiredRoles: []
    },
    {
        title: 'Registration',
        url: '/auth',
        icon: 'person-add',
        menuIndex: 2,
        shownBeforeLogin: true,
        shownAfterLogin: false,
        requiredRoles: []
    },
    {
        title: 'Customer Dashboard',
        url: '/customers/dashboard',
        icon: 'bar-chart',
        menuIndex: 2,
        shownBeforeLogin: false,
        shownAfterLogin: true,
        requiredRoles: [RolesEnum.Customer]
    },
    {
        title: 'Service Provider Dashboard',
        url: '/',
        icon: 'bar-chart',
        menuIndex: 2,
        shownBeforeLogin: false,
        shownAfterLogin: true,
        requiredRoles: [RolesEnum.SpEmployee]
    },
    {
        title: 'Profile',
        url: '/auth/profile/customer',
        icon: 'person',
        menuIndex: 2,
        shownBeforeLogin: false,
        shownAfterLogin: true,
        requiredRoles: [RolesEnum.Customer]
    },
    {
        title: 'Profile',
        url: '/auth/profile/service-provider',
        icon: 'person',
        menuIndex: 2,
        shownBeforeLogin: false,
        shownAfterLogin: true,
        requiredRoles: [RolesEnum.SpEmployee]
    },
    {
        title: 'Location Management',
        url: '/locations',
        icon: 'storefront',
        menuIndex: 2,
        shownBeforeLogin: false,
        shownAfterLogin: true,
        requiredRoles: [RolesEnum.LocManager]
    },
    {
        title: 'Employee Management',
        url: '/technicians/manager',
        icon: 'people',
        menuIndex: 2,
        shownBeforeLogin: false,
        shownAfterLogin: true,
        requiredRoles: [RolesEnum.SpEmpManager]
    },
    {
        title: 'New Order',
        url: '/customers/orders/new',
        icon: 'add',
        menuIndex: 2,
        shownBeforeLogin: false,
        shownAfterLogin: true,
        requiredRoles: [RolesEnum.Customer]
    },
    {
        title: 'Order Overview',
        url: '/customers/orders',
        icon: 'document',
        menuIndex: 2,
        shownBeforeLogin: false,
        shownAfterLogin: true,
        requiredRoles: [RolesEnum.Customer]
    },
    {
        title: 'Order Overview',
        url: '/technicians/orders',
        icon: 'document',
        menuIndex: 2,
        shownBeforeLogin: false,
        shownAfterLogin: true,
        requiredRoles: [RolesEnum.SpEmployee]
    },
    {
        title: 'Company Profile',
        url: '/company',
        icon: 'business',
        menuIndex: 2,
        shownBeforeLogin: false,
        shownAfterLogin: true,
        requiredRoles: []
    },
    {
        title: 'Settings',
        url: '/settings',
        icon: 'settings',
        menuIndex: 2,
        shownBeforeLogin: true,
        shownAfterLogin: true,
        requiredRoles: []
    },
    {
        title: 'Logout',
        url: '/auth/logout',
        icon: 'log-out',
        menuIndex: 3,
        shownBeforeLogin: false,
        shownAfterLogin: true,
        requiredRoles: []
    },
];
