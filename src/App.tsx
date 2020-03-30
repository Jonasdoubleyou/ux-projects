import React from 'react';
import './App.css';
import { Logo } from './Logo';
import { HashRouter, Route } from "react-router-dom";
import { Home } from './Home';
import { About } from './About';
import { GetHelp } from './GetHelp';
import { Help } from './Help';

function App() {
  return (
    <div className="App">
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
      </HashRouter>
    </div>
  );
}

export default App;
