import "./App.css";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Form from "./Components/Form";
import List from "./Components/List";
// import { Grid, Paper } from "@material-ui/core";
function App() {
  const [isList, setIsList] = useState();
  return (
    <div className="App">
      <Switch>
        <Route to="/">
          <Form />
          <List />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
