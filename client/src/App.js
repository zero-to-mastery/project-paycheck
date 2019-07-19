import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Switch, Route } from 'react-router-dom';

// View Imports
import Homepage from "./views/Homepage/Homepage.view"
import PaycheckCard from "./views/paycheckCard/PaycheckCard";

// Component Imports
import MainAppBar from "./components/MainAppBar/MainAppBar.component"
export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <MainAppBar>
      </MainAppBar>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/paycheck' component={PaycheckCard} />
        </Switch>
    </div>
  );
}
