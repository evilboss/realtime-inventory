import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './DefaultLayout';

const Loading = () => {
    return <div>Loading...</div>;
};
const DeviceSettings = Loadable({
    loader: () => import('./js/components/DeviceSettings'),
    loading: Loading
});
const Inventory = Loadable({
    loader: () => import('./js/components/Inventory'),
    loading: Loading
});

const InventoryStats = Loadable({
    loader: () => import('./js/components/InventoryStats'),
    loading: Loading
});

const SensorsCalibration = Loadable({
    loader: () => import('./js/components/SensorsCalibration'),
    loading: Loading
});
const SensorsSettings = Loadable({
    loader: () => import('./js/components/SensorsSettings'),
    loading: Loading
});
const SensorsAll = Loadable({
    loader: () => import('./js/components/SensorsAll'),
    loading: Loading
});
const Events = Loadable({
    loader: () => import('./js/components/Events'),
    loading: Loading
});
const Users = Loadable({
    loader: () => import('./views/Users/Users'),
    loading: Loading,
});

const User = Loadable({
    loader: () => import('./views/Users/User'),
    loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    {path: '/', exact: true, name: 'Home', component: DefaultLayout},
    {path: '/inventory', name: 'Inventory', component: Inventory},
    {path: '/stats', name: 'Stats', component: InventoryStats},
    {path: '/device-settings', name: 'Device Settings', component: DeviceSettings},
    {path: '/users', name: 'Users', component: Users},
    {path: '/events', name: 'Users', component: Events},
    {path: '/sensors/all', name: 'All Sensors', component: SensorsAll},
    {path: '/sensors/settings', name: 'Sensor Settings', component: SensorsSettings},
    {path: '/sensors/calibration', name: 'Sensor Calibration', component: SensorsCalibration},
    {path: '/video-cameras', name: 'Video Cameras', component: SensorsAll},
    {path: '/users', exact: true, name: 'Users', component: Users},
    {path: '/user/:id', exact: true, name: 'User Details', component: User},

];

export default routes;
