export default {
    items: [
        {
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'icon-speedometer',
            badge: {
                variant: 'info',
            },
        },
        {
            title: true,
            name: 'Inventory',
        },
        {
            name: 'Products',
            url: '/inventory',
            icon: 'cui-cart',
        },
        {
            name: 'Stats',
            icon: 'cui-bar-chart',
            url: '/stats'
        },
        {
            divider: true,
        },
        {
            title: true,
            name: 'Machine Vision',
            icon: 'cui-camera',
            wrapper: {
                element: '',
                attributes: {},
            },
        },
        {
            divider: true,
        },
        {
            name: 'Events',
            icon: 'fas fa-calendar-alt',
            url: '/events'
        },
        {
            name: 'Video Feed',
            icon: 'fas fa-video',
            url: '/video-cameras'
        },
        {
            name: 'Weight Sensors',
            icon: 'fas fa-balance-scale',
            children: [
                {
                    name: 'All Sensors',
                    icon: 'fab fa-cloudscale',
                    url: '/sensors/all'
                },
                {
                    name: 'Sensor Settings',
                    icon: 'fas fa-weight',
                    url: '/sensors/settings'

                },
                {
                    name: 'Sensor Calibration',
                    icon: 'fas fa-dumbbell',
                    url: '/sensors/calibration'


                }
            ]


        },

        {
            divider: true,
        },
        {
            title: true,
            name: 'System Settings',

            // optional class names space delimited list for title item ex: "text-center"
        },
        {
            name: 'Device Settings',
            icon: 'fas fa-cogs',
            url: '/device-settings',

        },
        {
            title: true,
            name: 'User Management',

            // optional class names space delimited list for title item ex: "text-center"
        },
        {
            name: 'Users',
            icon: 'fas fa-users',
            url: '/users',

        },
    ],
};
