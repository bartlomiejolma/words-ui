import React from "react";
import { Drawer as MuiDrawer, Divider, IconButton } from "@material-ui/core";

import { ChevronLeftSharp } from "@material-ui/icons";

interface DrawerProps {
  handleDrawerClose: () => void;
  open: boolean;
}
const Drawer = ({ open, handleDrawerClose }: DrawerProps) => {
  return (
    <MuiDrawer
      anchor="left"
      onClose={handleDrawerClose}
      open={open}
      variant="persistent"
    >
      <IconButton onClick={handleDrawerClose}>
        <ChevronLeftSharp />
      </IconButton>
      <Divider />
    </MuiDrawer>
  );
};

export default Drawer;
