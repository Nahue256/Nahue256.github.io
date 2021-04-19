import React, { Component } from "react";
import { MakeStyles, Drawer, makeStyles } from "@material-ui/core";

import Lista from "./List";

const estilos = makeStyles((theme) => ({
  drawer: {
    width: 200,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 200,
    backgroundColor: "#9500ae",
    color: "white",
  },
  toolbar: theme.mixins.toolbar,
}));

const StaticDrawer = () => {
  const classes = estilos();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <Lista />
    </Drawer>
  );
};

export default StaticDrawer;
