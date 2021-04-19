import React, { Component } from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";

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

const Experience = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <StaticDrawer />
      <div className={classes.content}>
        <Box my={10}>
          <Typography variant="h3" align="center">
            <Box my={5}>Experiencia</Box>
          </Typography>
        </Box>
        <Box my={10}>
          <Typography variant="h4" align="center">
            Laboral
          </Typography>
          <Typography variant="body1" align="center">
            <Box my={5}>
              07/2015 – 11/2015
              <br />
              Soporte Técnico (Pasantia)
              <br /> Municipalidad de Lomas de Zamora, Lomas de Zamora <br />
              Tareas realizadas: - Brindar soporte a los ordenadores y a la red
              del edificio - Instalación de redes
            </Box>
            <Box my={5}>
              10/2019 – Presente
              <br />
              Desarrollador
              <br /> Exisoft, Microcentro
              <br /> Tareas realizadas:
              <br /> - Entrega a través de la totalidad del ciclo de vida de
              aplicaciones concepto, diseño, desarrollo, implementación, prueba
              y soporte.
              <br /> - Mantener las aplicaciones productivas, corregir errores e
              implementar nuevas funcionalidades.
              <br /> - Trabajar en estrecha colaboración con otros
              desarrolladores, analistas funcionales y lideres.
              <br /> - Optimizar el rendimiento de las aplicaciones. -
              Refactorizar el código para su óptimo funcionamiento.
              <br /> - Resolución de bugs - Consumo de APIs con a través de
              métodos GET, POST, PUT, etc.
              <br /> - Consumo de SPs de bases de datos para obtener y mostrar,
              modificar o eliminar sus datos. -<br />
              Creación de aplicaciones para su consumo mediante SOAP o REST.
            </Box>
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default Experience;
