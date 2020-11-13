import React from "react";
import {
  Drawer as MuiDrawer,
  Divider,
  IconButton,
  Paper,
} from "@material-ui/core";
import styled from "styled-components";

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
      PaperProps={{ component: StyledOpenPaper }}
    >
      <IconButton onClick={handleDrawerClose}>
        <ChevronLeftSharp />
      </IconButton>
      <Divider />
    </MuiDrawer>
  );
};

const StyledOpenPaper = styled(Paper)`
  width: 30%;
`;

export default Drawer;
