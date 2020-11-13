import React from "react";

import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

interface TitleBarProps {
  handleMenuClick: () => void;
}

const TitleBar = ({ handleMenuClick }: TitleBarProps) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" onClick={handleMenuClick}>
          <Menu />
        </IconButton>
        <Typography variant="h4">Words memorizer</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TitleBar;
