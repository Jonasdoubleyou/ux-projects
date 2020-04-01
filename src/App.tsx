import React from 'react';
import './App.css';
import { Logo } from './Logo';
import { HashRouter, Route } from "react-router-dom";
import { Home } from './Home';
import { About } from './About';
import { GetHelp } from './GetHelp';
import { Help } from './Help';
import { Map } from './Map';
import { ShowList } from './ShowList';
import { Buy } from './Buy';
import { Recipe } from './Recipe';
import { Deliver } from './Deliver';
import { Orders } from './Orders';
import { AddOrder } from './AddOrder';
import { CheckOrder } from './CheckOrder';
import { OrderStatus } from './OrderStatus';
import { Arrival } from './Arrival';

function App() {
  return (
    <div className="App">
      <Logo/>
      <HashRouter>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/get-help">
          <GetHelp />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="/map">
          <Map />
        </Route>
        <Route path="/show-list">
          <ShowList />
        </Route>
        <Route path="/buy">
          <Buy/>
        </Route>
        <Route path="/recipe">
          <Recipe />
        </Route>
        <Route path="/delivery">
          <Deliver />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/add-order">
          <AddOrder />
        </Route>
        <Route path="/check-order">
          <CheckOrder />
        </Route>
        <Route path="/order-status">
          <OrderStatus />
        </Route>
        <Route path="/arrival">
          <Arrival />
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
