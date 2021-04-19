import React, { Component } from "react";
import { Box, Button, Typography, makeStyles } from "@material-ui/core";

import Contact from "./contact";
import Title from "./title";
import Links from "./links";
import StaticDrawer from "./drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <StaticDrawer />
      <div>
        <Box my={15}>
          <Title />
          <Typography variant="h5" align="center">
            <Box my={5}>
              <Links />
            </Box>
          </Typography>
        </Box>
        <Box my={20}>
          <Typography variant="h4" align="center">
            Acerca de mi
          </Typography>
          <Typography variant="body1" align="center">
            Soy un estudiante y desarrollador de Buenos Aires, Argentina. Con
            conocimientos en diferentes lenguajes de programacion como C++,
            Javascript y ESQL ademas de frameworks y librerias como NodeJS,
            Express y React.
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default Main;
