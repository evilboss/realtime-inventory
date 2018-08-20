import React from "react";
import { Switch, Route } from "react-router-dom";
import Inventory from "./Inventory";

const Main = () => (
    <main>
        <Switch>
            <Route path="/inventory" component={Inventory} />
        </Switch>
    </main>
);

export default Main;