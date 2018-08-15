import React from "react";
import { Switch, Route } from "react-router-dom";
import Inventory from "./Inventory";
import Pos from "./Pos";
import Transactions from "./Transactions";
import LiveCart from "./LiveCart";
import Devices from "./Devices";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Pos} />
      <Route path="/inventory" component={Inventory} />
      <Route path="/transactions" component={Transactions} />
      <Route path="/livecart" component={LiveCart} />
        <Route path="/devices" component={Devices} />

    </Switch>
  </main>
);

export default Main;
