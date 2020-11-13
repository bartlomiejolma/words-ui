import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TitleBar from "./TitleBar";
import WordsList from "./WordsList";

function App() {
  return (
    <Router>
      <TitleBar />
      <Container>
        <Switch>
          <Route path="/">
            <WordsList />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
