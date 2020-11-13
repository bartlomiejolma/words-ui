import { Container, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import { ChevronLeftSharp } from "@material-ui/icons";
import Divider from "@material-ui/core/Divider";

import TitleBar from "./TitleBar";
import WordsList from "./WordsList";

const Progress = () => {
  return <div>Progress</div>;
};
const AddWord = () => {
  return <div>Add Word</div>;
};

function App() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  return (
    <Router>
      <TitleBar handleMenuClick={handleDrawerOpen} />
      <Drawer
        anchor="left"
        onClose={handleDrawerClose}
        open={open}
        variant="persistent"
      >
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftSharp />
        </IconButton>
        <Divider />
      </Drawer>
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
