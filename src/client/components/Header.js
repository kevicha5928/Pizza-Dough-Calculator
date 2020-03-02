import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = ({}) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h4" color="inherit" className="header">
        Pizza Dough Calculator
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
