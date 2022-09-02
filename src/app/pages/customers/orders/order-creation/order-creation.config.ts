import { AreaEnum, Type2DeEnum as OrderTypeEnum } from 'src/api/models';

export interface OrderType {
    name: string;
    id: number;
    imageUrl: string;
    value: OrderTypeEnum;
}

export interface OrderArea {
    name: string;
    id: number;
    imageUrl: string;
    value: AreaEnum;
}

export const OrderTypes: OrderType[] = [
    {
        name: 'Emergency / repair order',
        id: 0,
        imageUrl: '/assets/images/orders/kind/0.svg',
        value: OrderTypeEnum.EmergencyRepair
    },
    {
        name: 'Predictive maintenance',
        id: 1,
        imageUrl: '/assets/images/orders/kind/1.svg',
        value: OrderTypeEnum.PredictiveMaintenance
    },
    {
        name: 'Request a new project / offer',
        id: 2,
        imageUrl: '/assets/images/orders/kind/2.svg',
        value: OrderTypeEnum.NewProject
    }
];

export const OrderAreas: OrderArea[] = [
    {
        name: 'Plants / Machines',
        id: 0,
        imageUrl: '/assets/images/orders/department/machines.svg',
        value: AreaEnum.Plants
    },
    {
        name: 'PKW / LKW',
        id: 1,
        imageUrl: '/assets/images/orders/department/trucks.svg',
        value: AreaEnum.CarTruck
    },
    {
        name: 'E-Mobility',
        id: 2,
        imageUrl: '/assets/images/orders/department/e-mobility.svg',
        value: AreaEnum.EMobility
    },
    {
        name: 'Door / gate',
        id: 3,
        imageUrl: '/assets/images/orders/department/gates.svg',
        value: AreaEnum.Door
    },
    {
        name: 'Forklift Trucks / Conveyor Vehicles',
        id: 4,
        imageUrl: '/assets/images/orders/department/forklifts.svg',
        value: AreaEnum.ForkliftsConveyors
    },
    {
        name: 'House Technic',
        id: 5,
        imageUrl: '/assets/images/orders/department/house_electronics.svg',
        value: AreaEnum.BuildingServices
    },
    {
        name: 'Cold / Air Conditioning / Sanitary',
        id: 6,
        imageUrl: '/assets/images/orders/department/heating.svg',
        value: AreaEnum.Refrigeration
    },
    {
        name: 'Lifting platforms / lift',
        id: 7,
        imageUrl: '/assets/images/orders/department/lifts.svg',
        value: AreaEnum.LiftingPlatforms
    },
    {
        name: 'Window Construction / Glass',
        id: 8,
        imageUrl: '/assets/images/orders/department/window.svg',
        value: AreaEnum.WindowGlass
    },
    {
        name: 'Stage / Event Technology',
        id: 9,
        imageUrl: '/assets/images/orders/department/stage.svg',
        value: AreaEnum.EventTech
    },
    {
        name: 'IT / Presentation Technology',
        id: 10,
        imageUrl: '/assets/images/orders/department/presentation.svg',
        value: AreaEnum.ItPresentationTech
    },
    {
        name: 'Drywall / Masonry Work',
        id: 11,
        imageUrl: '/assets/images/orders/department/wall.svg',
        value: AreaEnum.DrywallMasonry
    },
    {
        name: 'Outdoor Area',
        id: 12,
        imageUrl: '/assets/images/orders/department/lawn.svg',
        value: AreaEnum.Outdoor
    },
    {
        name: 'Welding',
        id: 13,
        imageUrl: '/assets/images/orders/department/welding.svg',
        value: AreaEnum.Welding
    },
    {
        name: 'Cleaning',
        id: 14,
        imageUrl: '/assets/images/orders/department/cleaning.svg',
        value: AreaEnum.Cleaning
    },
    {
        name: 'General',
        id: 15,
        imageUrl: '/assets/images/orders/department/others.svg',
        value: AreaEnum.General
    }
];

export enum ServiceTimeTypeEnum {
    Days = 'days',
    Hours = 'h',
    Date = '',
}

export interface ServiceTimeOption {
    id: number;
    value: number;
    type: ServiceTimeTypeEnum;
    factor?: number;
}

export interface ServiceTime {
    orderType: OrderTypeEnum;
    values: ServiceTimeOption[];
}

export const ServiceTimeOptionMultiplicationFactor = [
    {
        type: ServiceTimeTypeEnum.Days,
        factor: 24,
        momentTimeFormat: 'MMM Do YYYY'
    },
    {
        type: ServiceTimeTypeEnum.Hours,
        factor: 1,
        momentTimeFormat: 'HH:MM[h], MMM Do YYYY'
    },
    {
        type: ServiceTimeTypeEnum.Date,
        factor: 24,
        momentTimeFormat: 'MMMM Do YYYY'
    }
];


export const ServiceTimeOptions: ServiceTime[] = [
    {
        orderType: OrderTypeEnum.EmergencyRepair,
        values: [
            {
                id: 0,
                value: 2,
                type: ServiceTimeTypeEnum.Hours,
            },
            {
                id: 1,
                value: 4,
                type: ServiceTimeTypeEnum.Hours,
            },
            {
                id: 2,
                value: 6,
                type: ServiceTimeTypeEnum.Hours,
            },
            {
                id: 3,
                value: 24,
                type: ServiceTimeTypeEnum.Hours,
            }
        ]
    },
    {
        orderType: OrderTypeEnum.PredictiveMaintenance,
        values: [
            {
                id: 0,
                value: 2,
                type: ServiceTimeTypeEnum.Days,
            },
            {
                id: 1,
                value: 3,
                type: ServiceTimeTypeEnum.Days
            },
            {
                id: 2,
                value: 4,
                type: ServiceTimeTypeEnum.Days
            },
            {
                id: 3,
                value: 5,
                type: ServiceTimeTypeEnum.Days
            },
            {
                id: 4,
                value: 7,
                type: ServiceTimeTypeEnum.Days
            },
            {
                id: 5,
                value: 10,
                type: ServiceTimeTypeEnum.Days
            },
            {
                id: 6,
                value: 14,
                type: ServiceTimeTypeEnum.Days
            },
        ]
    }
];
