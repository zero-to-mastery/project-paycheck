import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Switch, Route, Redirect } from "react-router-dom";

// View Imports
import Homepage from "./views/Homepage/Homepage";
import PaycheckCard from "./views/paycheckCard/PaycheckCard";
import FinancialCategoryPage from "views/financial-categories/pages/main";
import Login from "./views/login/Login";
import Settings from "./views/settings/form/Settings";

// Component Imports
import MainAppBar from "./components/MainAppBar/MainAppBar";

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <MainAppBar />
      <Switch>
        <Redirect exact from="/" to="/overview" />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/overview" component={FinancialCategoryPage} />
        <Route exact path="/paycheck" component={PaycheckCard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/settings" component={Settings} />
      </Switch>
    </div>
  );
}
