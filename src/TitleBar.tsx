import React from "react";

import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import Drawer from "@material-ui/core/Drawer";
import { ChevronLeftSharp } from "@material-ui/icons";
import Divider from "@material-ui/core/Divider";
import { useState } from "react";

const TitleBar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" onClick={handleDrawerOpen}>
            <Menu />
          </IconButton>
          <Typography variant="h4">Words memorizer</Typography>
        </Toolbar>
      </AppBar>

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
    </>
  );
};

export default TitleBar;
