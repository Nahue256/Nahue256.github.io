import React, { Component } from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import TextyAnim from "rc-texty";

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

const Formation = () => {
  const classes = useStyles();

  const getEnter = (e) => {
    switch (e.index) {
      default:
        return {
          opacity: 0,
        };
    }
  };
  return (
    <div className={classes.root}>
      <StaticDrawer />
      <div className={classes.content}>
        <Box my={10}>
          <Typography variant="h3" align="center">
            <Box my={5}>
              <TextyAnim enter={getEnter} leave={getEnter}>
                Formacion
              </TextyAnim>
            </Box>
          </Typography>
        </Box>
        <Box my={10}>
          <Typography variant="h4" align="center">
            Academica
          </Typography>
          <Typography variant="body1" align="center">
            <Box my={5}>
              2009 - 2015
              <br />
              Técnico en informática formal y profesional.
              <br /> Escuela de Educación Técnica Superior N°2
              <br /> Temperley, Buenos Aires, Argentina
              <br />
            </Box>
            <Box my={5}>
              2017 - Presente
              <br />
              Ingeniero en Informática (en curso)
              <br /> Universidad Nacional de Avellaneda
              <br /> Avellaneda, Buenos Aires, Argentina
            </Box>
          </Typography>
        </Box>
        <Typography variant="h4" align="center">
          Complementaria
        </Typography>
        <Typography variant="body1" align="center">
          <Box my={2}>
            Maquetación Digital con HTML5 y CSS, EANT – Octubre, 2019
          </Box>
          <Box my={2}>
            Programación Fullstack con JavaScript, EANT– Noviembre, 2019
          </Box>
          <Box my={2}>Desarrollo Backend con NodeJS, EANT – Febrero, 2020</Box>
          <Box my={2}>IBM App Connect Essentials, IBM – Junio, 2020</Box>
          <Box my={2}>
            React Native Tutorial for Beginners – Noviembre, 2020
          </Box>
          <Box my={2}>React Tutorial for Beginners - Noviembre, 2020</Box>
        </Typography>
      </div>
    </div>
  );
};

export default Formation;
