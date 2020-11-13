import React from "react";

import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const TitleBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start">
            <Menu />
        </IconButton>
        <Typography variant="h4">Words memorizer</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TitleBar;