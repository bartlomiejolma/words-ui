import { Container, CssBaseline } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Drawer from "./Drawer";

import { ThemeProvider } from "styled-components";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

import TitleBar from "./TitleBar";
import WordsList from "./WordsList";

import createAppTheme from "./createAppTheme";
import AddWord from "./AddWord";

const Progress = () => {
  return <div>Progress</div>;
};

const customTheme = createAppTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  return (
    <StylesProvider>
      <MuiThemeProvider theme={customTheme}>
        <ThemeProvider theme={customTheme}>
          <Router>
            <CssBaseline />
            <TitleBar handleMenuClick={handleDrawerOpen} />
            <Drawer open={open} handleDrawerClose={handleDrawerClose} />
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
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
