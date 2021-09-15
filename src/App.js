import "./App.css";
// import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
// import { Grid, Paper } from "@material-ui/core";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route to="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
