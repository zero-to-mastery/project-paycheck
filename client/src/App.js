import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import PaycheckCard from "./views/paycheckCard/PaycheckCard";
export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <h1>Welcome to Project Paycheck</h1>
      <PaycheckCard/>
    </div>
  );
}
