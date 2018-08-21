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

            // optional class names space delimited list for title item ex: "text-center"
        },
        {
            name: 'Products',
            url: '/inventory',
            icon: 'cui-cart',
        },
        {
            name: 'Stats',
            url: '/theme/colors',
            icon: 'cui-bar-chart',
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
            name: 'Video Feed',
            url: '/base',
            icon: 'icon-puzzle',
        },
        {
            name: 'Weight Sensors',
            url: '/buttons',
            icon: 'cui-microchip',
        },
        {
            divider: true,
        },
        {
            title: true,
            name: 'System Settings',
            // optional class names space delimited list for title item ex: "text-center"
        },
    ],
};
