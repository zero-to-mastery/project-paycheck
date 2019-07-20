import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Route, IndexRedirect } from "react-router-dom";

// View Imports
import Homepage from "./views/Homepage/Homepage";
import PaycheckCard from "./views/paycheckCard/PaycheckCard";
import FinancialCategoryPage from "views/financial-categories/pages/main";

// Component Imports
import MainAppBar from "./components/MainAppBar/MainAppBar";

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <MainAppBar />
      <Route exact path="/" component={Homepage}>
        <IndexRedirect to="/overview" />
        <Route exact path="overview" component={FinancialCategoryPage} />
        <Route exact path="paycheck" component={PaycheckCard} />
      </Route>
    </div>
  );
}
