import React from "react";
import {Switch, Route} from "react-router-dom";
import Inventory from "./Inventory";
import {Container} from 'reactstrap';

import {
    AppAside,
    AppBreadcrumb,
    AppFooter,
    AppHeader,
    AppSidebar,
    AppSidebarFooter,
    AppSidebarForm,
    AppSidebarHeader,
    AppSidebarMinimizer,
    AppSidebarNav,
} from '@coreui/react';
import DefaultAside from '../../DefaultLayout/DefaultAside';
import DefaultFooter from '../../DefaultLayout/DefaultFooter';
import DefaultHeader from '../../DefaultLayout/DefaultHeader';
import DefaultLayout from '../../DefaultLayout/DefaultLayout';

const Main = () => (
    <main>
        <Switch>
            <Route path="/" component={DefaultLayout}/>

            <Route path="/inventory" component={Inventory}/>
        </Switch>
    </main>
);

export default Main;