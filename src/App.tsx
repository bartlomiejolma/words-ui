import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TitleBar from "./TitleBar";
import WordsList from "./WordsList";

const Progress = () => {
  return <div>Progress</div>;
};
const AddWord = () => {
  return <div>Add Word</div>;
};

function App() {
  return (
    <Router>
      <TitleBar />
      <Container>
        <Switch>
          <Route path="/progress">
            <Progress />
          </Route>
          <Route path="/addWord">
            <AddWord />
          </Route>
          <Route path="/">
            <WordsList />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
